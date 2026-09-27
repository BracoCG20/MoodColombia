//src/lib/mail/templates/client-admin.ts
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://www.mood.com.co";
const LOGO_URL = `${SITE_URL}/logo_header.webp`;

export const getClientAdminTemplate = (data: {
	nombre: string;
	correo: string;
	telefono: string;
	mensaje: string;
}) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL}" alt="Mood Agencia" style="max-height: 32px; display: block; border: 0;" />
            </div>
            
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 8px 0;">Nuevo Lead Comercial</h1>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 24px 0;">Se ha recibido un nuevo contacto desde el sitio web.</p>
            
            <!-- Data Table (Shadcn UI style) -->
            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 10px; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600; width: 30%;">Nombre</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${data.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;">Correo</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">
                  <a href="mailto:${data.correo}" style="color: #0f172a; text-decoration: underline;">${data.correo}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;">Teléfono</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${data.telefono}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600; vertical-align: top;">Mensaje</td>
                <td style="padding: 12px 16px; color: #0f172a; font-size: 14px; line-height: 1.5;">${data.mensaje}</td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </div>
  `;
};
