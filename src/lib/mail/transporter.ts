// src/lib/mail/transporter.ts
import nodemailer from 'nodemailer';

// Leemos las credenciales desde las variables de entorno de Astro
const SMTP_HOST = import.meta.env.SMTP_HOST;
const SMTP_PORT = import.meta.env.SMTP_PORT;
const SMTP_USER = import.meta.env.SMTP_USER;
const SMTP_PASS = import.meta.env.SMTP_PASS;

// Validación preventiva en desarrollo
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn(
    '⚠️ Faltan variables de entorno para Nodemailer. Revisa tu archivo .env',
  );
}

/**
 * Objeto reutilizable para enviar correos.
 * La configuración segura asegura la conexión TLS si el puerto es 465.
 */
export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 465,
  secure: Number(SMTP_PORT) === 465, // true para puerto 465 (SSL), false para el resto
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

/**
 * Utilidad opcional para verificar la conexión SMTP.
 * Se puede ejecutar en la inicialización del endpoint para depurar errores.
 */
export const verifyConnection = async () => {
  try {
    await transporter.verify();
    console.log(
      '✅ Conexión SMTP establecida correctamente y lista para enviar correos.',
    );
  } catch (error) {
    console.error('❌ Error de configuración SMTP:', error);
  }
};
