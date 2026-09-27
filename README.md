# MoodCo - Agencia Creativa Digital (Sede Colombia) 🌶️

Este repositorio contiene el código fuente de la Landing Page oficial de **MoodCo** (Colombia), una sucursal de Mood Agencia (Perú). El proyecto está construido como una Single Page Application (SPA) moderna, enfocada en el rendimiento extremo (SEO), accesibilidad, internacionalización y micro-interacciones inmersivas.

## 🚀 Tecnologías Principales

- **Framework:** [Astro](https://astro.build/) (Modo SSR - Server-Side Rendering)
- **Animaciones & Scroll:** [GSAP](https://gsap.com/) + ScrollTrigger & [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- **Estilos:** SCSS / Sass (Arquitectura BEM, Mobile-First)
- **Backend / API:** Node.js, Astro API Routes
- **Formularios & Correos:** [Nodemailer](https://nodemailer.com/) + [Zod](https://zod.dev/) (Validación estricta)
- **Transiciones:** Astro ViewTransitions (`<ClientRouter />`)

## ✨ Características Destacadas

1. **Internacionalización (i18n):** Sistema nativo de diccionarios (`src/i18n/ui.ts`) para soportar Español (`/`) e Inglés (`/en/`) con transiciones suaves sin recargar la página.
2. **Animaciones de Alto Rendimiento:** Efectos Parallax, carruseles infinitos, acordeones y revelado de elementos por scroll, delegados a la GPU mediante GSAP.
3. **Formularios Seguros y Funcionales:**
   - Doble formulario (Contacto Comercial y Postulación de Talento).
   - Validación frontal y en servidor (Zod).
   - Protección Anti-Spam (Honeypot + Rate Limiting por IP).
   - Soporte para subida de archivos (CVs en PDF/DOCX) procesados en memoria (Buffer).
4. **SEO & IA Ready:** Meta etiquetas dinámicas, Hreflang multirregión, Schema.org (JSON-LD) para negocios locales y archivo `llms.txt` integrado para motores de IA.

## 📂 Estructura del Proyecto

```text
/
├── public/                 # Activos estáticos (imágenes, videos, robots.txt, sitemap.xml, llms.txt)
├── src/
│   ├── assets/             # Fuentes locales y logos
│   ├── components/         # Componentes UI encapsulados (Hero, About, Forms, Footer...)
│   ├── i18n/               # Diccionarios de traducción y utilidades (ui.ts, utils.ts)
│   ├── layouts/            # Layout principal (Layout.astro) con inyección de metadatos
│   ├── lib/mail/           # Lógica de Nodemailer, transporte y plantillas HTML
│   ├── pages/              # Rutas de Astro (index.astro, /en/index.astro)
│   │   └── api/forms/      # Endpoint SSR para procesar formularios (submit.ts)
│   ├── styles/             # Variables globales, tipografías y mixins de SCSS
│   └── utils/              # Funciones utilitarias (ej. rate-limit.ts)
├── .env                    # Variables de entorno (no versionado)
└── astro.config.mjs        # Configuración principal de Astro
```

## 🛠️ Requisitos Previos

- [Node.js] v22.12.0 o superior.
- Una cuenta de correo (ej. Gmail, Outlook, o SMTP propio) para el envío de notificaciones.

## ⚙️ Instalación y Configuración

1. **Clona el repositorio e instala las dependencias:**

   ```bash
   npm install
   ```

2. **Configura las Variables de Entorno:**
   Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente formato:

   ```env
   # Configuración SMTP (Nodemailer)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=tu_correo@gmail.com
   SMTP_PASS=tu_contraseña_de_aplicacion

   # Configuración de Correos (Remitente y Destinatarios)
   EMAIL_FROM="MoodCo Web" <tu_correo@gmail.com>
   EMAIL_TO_NOTIFICATION=ventas@mood.com.co
   EMAIL_CC_NOTIFICATION=rrhh@mood.com.co

   # Configuración del Sitio
   PUBLIC_SITE_URL=http://localhost:4321
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`.

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local de Astro.
- `npm run build`: Compila la aplicación para producción (generando rutas estáticas y preparando el servidor SSR).
- `npm run preview`: Previsualiza la compilación de producción localmente.

## 👨‍💻 Autor

- **Desarrollo y Arquitectura:** Cristian Braco
- **Propiedad Intelectual:** Mood Agencia (Sede Colombia) - [mood.com.co](https://mood.com.co)

---
