//src/lib/mail/mailer.ts
import { getClientAdminTemplate } from "./templates/client-admin";
import { getClientUserTemplate } from "./templates/client-user";
import { getWorkAdminTemplate } from "./templates/work-admin";
import { getWorkUserTemplate } from "./templates/work-user";
import { transporter } from "./transporter";

const EMAIL_FROM = import.meta.env.EMAIL_FROM;
const EMAIL_TO_NOTIFICATION = import.meta.env.EMAIL_TO_NOTIFICATION;
const EMAIL_CC_NOTIFICATION = import.meta.env.EMAIL_CC_NOTIFICATION;

type ContactData = {
	nombre: string;
	correo: string;
	telefono: string;
	mensaje: string;
};

// Tipado para el archivo adjunto (que recibiremos desde el formData)
type FileAttachment = {
	filename: string;
	content: Buffer;
	contentType: string;
};

/**
 * Procesa el envío de correos para Clientes Comerciales
 */
export const sendClientEmails = async (data: ContactData) => {
	// 1. Correo para el equipo de Mood (Con copia)
	const adminMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: EMAIL_TO_NOTIFICATION,
		cc: EMAIL_CC_NOTIFICATION,
		subject: `🚨 Nuevo Lead Comercial: ${data.nombre}`,
		html: getClientAdminTemplate(data),
	});

	// 2. Correo de agradecimiento para el Usuario
	const userMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: data.correo,
		subject: `¡Gracias por contactar con Mood Agencia!`,
		html: getClientUserTemplate(data.nombre),
	});

	// Promise.all ejecuta ambos envíos al mismo tiempo para mayor rapidez
	await Promise.all([adminMail, userMail]);
};

/**
 * Procesa el envío de correos para "Trabaja con nosotros" (Incluye adjunto y copia)
 */
export const sendWorkEmails = async (
	data: ContactData,
	file: FileAttachment,
) => {
	// 1. Correo para el equipo de RRHH / Admin con el archivo adjunto (Con copia)
	const adminMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: EMAIL_TO_NOTIFICATION,
		cc: EMAIL_CC_NOTIFICATION,
		subject: `💼 Nueva Postulación: ${data.nombre}`,
		html: getWorkAdminTemplate(data),
		attachments: [
			{
				filename: file.filename,
				content: file.content,
				contentType: file.contentType,
			},
		],
	});

	// 2. Correo de confirmación para el Postulante (sin adjunto, solo HTML)
	const userMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: data.correo,
		subject: `Hemos recibido tu postulación - Mood Agencia`,
		html: getWorkUserTemplate(data.nombre),
	});

	await Promise.all([adminMail, userMail]);
};
