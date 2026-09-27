import type { APIRoute } from "astro";
import { Buffer } from "node:buffer";
import { z } from "zod";
import { sendClientEmails, sendWorkEmails } from "../../../lib/mail/mailer";
import { rateLimit } from "../../../utils/rate-limit";

// Aseguramos que el endpoint se ejecute siempre en el servidor (SSR)
export const prerender = false;

const escapeHTML = (str: string) =>
	str.replace(
		/[&<>'"]/g,
		(tag) =>
			({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				'"': "&quot;",
			})[tag] || tag,
	);

const formSchema = z
	.object({
		nombre: z
			.string()
			.trim()
			.min(2, "El nombre debe tener al menos 2 caracteres.")
			.max(50, "El nombre es demasiado largo.")
			.regex(
				/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
				"Solo se permiten letras y espacios.",
			)
			.transform(escapeHTML),
		correo: z
			.string()
			.trim()
			.email("Formato de correo inválido.")
			.transform(escapeHTML),
		telefono: z
			.string()
			.trim()
			.min(6, "El teléfono es muy corto.")
			.max(20, "El teléfono es muy largo.")
			.regex(
				/^\+?[\d\s\-]+$/,
				"El teléfono solo puede contener números, espacios y +.",
			)
			.transform(escapeHTML),
		mensaje: z
			.string()
			.trim()
			.max(2000, "El mensaje es demasiado largo.")
			.optional()
			.default("Sin mensaje adicional.")
			.transform(escapeHTML),
	})
	.strict();

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_MIME_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Helper para responder siempre con JSON estructurado
const jsonResponse = (data: object, status: number) => {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});
};

export const POST: APIRoute = async ({ request }) => {
	try {
		const ip = request.headers.get("x-forwarded-for") || "unknown-ip";

		// Validación de Rate Limit (Prevención de Spam)
		if (!rateLimit(ip, 3, 60000)) {
			return jsonResponse(
				{
					success: false,
					message: "Demasiadas solicitudes. Espera un momento.",
				},
				429,
			);
		}

		const formData = await request.formData();
		const formType = formData.get("formType");
		const botCheck = formData.get("bot_check");

		// Honeypot (Anti-Bots)
		if (botCheck) {
			return jsonResponse(
				{ success: false, message: "Petición rechazada." },
				400,
			);
		}

		const rawData = {
			nombre: formData.get("nombre") as string,
			correo: formData.get("correo") as string,
			telefono: formData.get("telefono") as string,
			mensaje: formData.get("mensaje") as string,
		};

		const validatedData = formSchema.parse(rawData);

		if (formType === "contacto") {
			await sendClientEmails(validatedData);
			return jsonResponse({ success: true, message: "Mensaje enviado." }, 200);
		}

		if (formType === "trabaja") {
			const file = formData.get("archivo") as File;

			if (!file || file.size === 0) {
				return jsonResponse(
					{ success: false, message: "El archivo es obligatorio." },
					400,
				);
			}
			if (file.size > MAX_FILE_SIZE) {
				return jsonResponse(
					{ success: false, message: "El archivo excede los 5MB permitidos." },
					400,
				);
			}
			if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
				return jsonResponse(
					{
						success: false,
						message: "Formato no permitido (Solo PDF, DOC, DOCX).",
					},
					400,
				);
			}

			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);

			const fileAttachment = {
				filename: file.name,
				content: buffer,
				contentType: file.type,
			};

			await sendWorkEmails(validatedData, fileAttachment);
			return jsonResponse(
				{ success: true, message: "Postulación enviada." },
				200,
			);
		}

		return jsonResponse(
			{ success: false, message: "Tipo de formulario inválido." },
			400,
		);
	} catch (error) {
		console.error("❌ Error en el Endpoint de Formularios:", error);

		// Si el error viene de Zod, devolvemos un 400. Si no, un 500.
		if (error instanceof z.ZodError) {
			return jsonResponse(
				{ success: false, message: "Los datos enviados no son válidos." },
				400,
			);
		}

		return jsonResponse(
			{
				success: false,
				message: "Ocurrió un error inesperado al procesar tu solicitud.",
			},
			500,
		);
	}
};
