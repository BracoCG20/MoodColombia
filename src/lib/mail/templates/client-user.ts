//src/lib/mail/templates/client-user.ts
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://www.mood.com.co";
const LOGO_URL = `${SITE_URL}/logo_header.png`;

export const getClientUserTemplate = (name: string) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <!-- Header / Logo -->
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL}" alt="Mood Agencia" style="max-height: 40px; display: block; border: 0;" />
            </div>
            
            <!-- Main Content -->
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">¡Hola, ${name}!</h1>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Hemos recibido tu mensaje correctamente. Nuestro equipo está revisando tu solicitud y nos pondremos en contacto contigo lo antes posible para ayudarte a llevar tu marca al siguiente nivel.
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0;">
              Gracias por pensar en <strong>Mood Agencia</strong>.
            </p>

            <!-- Divider -->
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
            
            <!-- Footer -->
            <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 0; text-align: center;">
              Este es un mensaje generado automáticamente.<br>Por favor, no respondas a este correo.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};
