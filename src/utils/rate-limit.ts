// src/utils/rate-limit.ts

// Guardamos el conteo de solicitudes por dirección IP
type RateLimitInfo = {
  count: number;
  resetTime: number;
};

// Usamos un Map en memoria. (Nota: En despliegues Serverless puros sin persistencia,
// este Map se reiniciará con cada instanciación del servidor, pero es suficiente
// para mitigar ataques masivos inmediatos).
const limits = new Map<string, RateLimitInfo>();

/**
 * Verifica si una IP ha excedido el límite de solicitudes.
 * @param ip - Dirección IP del cliente
 * @param limit - Número máximo de solicitudes permitidas por ventana
 * @param windowMs - Tiempo de la ventana en milisegundos
 * @returns boolean - `true` si la solicitud está permitida, `false` si debe bloquearse
 */
export const rateLimit = (
  ip: string,
  limit: number = 3,
  windowMs: number = 60000,
): boolean => {
  const now = Date.now();
  const userLimit = limits.get(ip);

  // Si la IP no existe en el mapa, la registramos
  if (!userLimit) {
    limits.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // Permitido
  }

  // Si el tiempo de bloqueo ya expiró, reiniciamos el contador
  if (now > userLimit.resetTime) {
    limits.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  // Si ha excedido el límite dentro de la ventana de tiempo
  if (userLimit.count >= limit) {
    return false; // Bloqueado
  }

  // Incrementamos el contador
  userLimit.count += 1;
  return true; // Permitido
};
