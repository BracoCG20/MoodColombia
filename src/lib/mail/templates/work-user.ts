//src/lib/mail/templates/work-user.ts
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://www.mood.com.co";
const LOGO_URL = `${SITE_URL}/logo_header.png`;

export const getWorkUserTemplate = (name: string) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL}" alt="Mood Agencia" style="max-height: 40px; display: block; border: 0;" />
            </div>
            
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">¡Hola, ${name}!</h1>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Hemos recibido tu postulación y tu HV con éxito. Nos emociona saber que te interesa formar parte del equipo de <strong>Mood Agencia</strong>.
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Estaremos revisando tu perfil a detalle. Si hace "match" con lo que estamos buscando actualmente, nos pondremos en contacto contigo muy pronto para dar el siguiente paso.
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0;">¡Mucho éxito!</p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
            
            <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 0; text-align: center;">
              Este es un mensaje generado automáticamente.<br>Por favor, no respondas a este correo.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};
