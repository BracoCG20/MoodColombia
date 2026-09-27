// src/i18n/ui.ts
export const defaultLang = "es";

export const routes = {
	"/": "/",
	"#nosotros": "#about-us",
	"#timeline": "#timeline",
	"#trabajos": "#works",
	"#marcas": "#brands",
	"#contacto": "#contact",
	"#cta": "#cta",
} as const;

export const ui = {
	es: {
		"header.tagline": "AGENCIA CREATIVA DIGITAL",
		"nav.nosotros": "NOSOTROS",
		"nav.timeline": "WHAT'S YOUR MOOD",
		"nav.trabajos": "TRABAJOS",
		"nav.marcas": "MARCAS",
		"nav.contacto": "CONTACTO",
		"nav.cta": "MOODERS",

		"hero.topText": ["CUANDO", "MUEVE", "EL NEGOCIO."],
		"hero.bottomText": ["UNA IDEA", "SOLO VALE"],

		// Sección Nosotros (About)
		"about.paragraph":
			"<strong>Somos el socio que transforma creatividad y estrategia en resultados reales.</strong> Leemos el negocio detrás de cada marca, sus objetivos, sus números y sus KPIs antes de crear. Con esa lectura desarrollamos plataformas de marca, campañas, contenidos y ecosistemas que responden a objetivos concretos, con resultados que se miden, se optimizan y se sostienen en el tiempo.",
		"about.stats": [
			{ prefix: "+", target: 15, suffix: "", label: "AÑOS" },
			{ prefix: "", target: 3, suffix: " PAÍSES", label: "PER / COL / CAM" },
			{ prefix: "", target: 150, suffix: "", label: "PROFESIONALES" },
			{ prefix: "", target: 45, suffix: "+", label: "CLIENTES" },
			{ prefix: "", target: 13, suffix: "", label: "PREMIOS" },
		],

		//Seccion What'sYourMood (Timeline)
		"timeline.intro.topText":
			"No todas las marcas están en el mismo lugar. Algunas están naciendo. Otras están creciendo.<strong> Otras están redefiniendo lo que serán mañana.</strong>",
		"timeline.intro.bottomText":
			"<strong>LEER ESE MOOD</strong> ES LEER EL NEGOCIO Y ENTENDERLO <strong>LO TRANSFORMA TODO.</strong>",
		"timeline.items": [
			{
				number: "01",
				title: "LAUNCH MOOD",
				description:
					"Tu marca nació y está lista para salir al mundo. Construimos contigo la plataforma de marca que le da dirección desde el día uno: estrategia y branding pensados para que llegue al mercado con un rumbo claro, no solo con un logo.",
			},
			{
				number: "02",
				title: "VISIBILITY MOOD",
				description:
					"Necesitas llamar la atención y quedarte en la mente de las personas. Creamos ideas con dirección: creatividad diseñada para hacer que tu marca sea imposible de ignorar y que esa atención se convierta en valor para el negocio.",
			},
			{
				number: "03",
				title: "GROWTH MOOD",
				description:
					"Quieres acelerar el crecimiento de tu marca. Nuestro equipo de estrategia y performance lee las oportunidades detrás de tus números y las transforma en crecimiento medible.",
			},
			{
				number: "04",
				title: "CONNECTION MOOD",
				description:
					"Buscas que las personas hablen de tu marca. Conectamos creatividad y creadores para generar conversaciones con afinidad y relevancia cultural, con un objetivo claro: que esa conversación mueva el negocio.",
			},
			{
				number: "05",
				title: "EVOLUTION MOOD",
				description:
					"Quieres transformar la experiencia de quienes interactúan con tu marca. Performance, pauta y UX trabajando juntos para que cada interacción entre personas y marca se traduzca en resultados que puedes medir.",
			},
			{
				number: "06",
				title: "CREATOR MOOD",
				description:
					"Buscas que las personas creen más en tu marca. Nuestro Hub de Creadores conecta tu marca con las voces y comunidades correctas para construir influencia real y credibilidad que se sostiene en el tiempo.",
			},
			{
				number: "07",
				title: "BUILD MOOD",
				description:
					"Tu marca necesita infraestructura digital para operar y vender. Diseñamos y desarrollamos sitios, plataformas y ecosistemas web construidos desde la estrategia: pensados para convertir visitas en clientes y soportar el crecimiento de tu negocio.",
			},
			{
				number: "08",
				title: "AI MOOD",
				description:
					"Tu objetivo es multiplicar tus capacidades. Producimos con inteligencia artificial: videos y contenido de calidad broadcast con presupuestos mucho más ajustados y tiempos de producción más cortos, sin afectar el resultado final. Más producción, la misma exigencia creativa, mejores números para tu negocio.",
			},
		],

		//Seccion Trabajos (Cases)
		"cases.header.regular": "TRANSFORMACIONES",
		"cases.header.bold": "QUE PUEDES VER (Y MEDIR).",
		"cases.btn": "VER CASO",
		"cases.items": [
			{
				id: "case-01",
				title: ["TOCADOS", "POR EL SOL"],
				description: "Transformamos el clima en el motor de nuestra campaña.",
				tags: "Visibility Mood · Connection Mood",
				link: "#",
				image: "case_brand_1.webp",
			},
			{
				id: "case-02",
				title: ["NAVIDAD", "COMAPANTÁSTICA"],
				description:
					"Nos apropiamos de la temporada más importante del año como nadie lo había hecho en la categoría.",
				tags: "Growth Mood · Visibility Mood · Connection Mood",
				link: "#",
				image: "case_brand_2.webp",
			},
			{
				id: "case-03",
				title: ["SI HAY CINE"],
				description: "Cada estreno es una nueva historia que contar.",
				tags: "Launch Mood · Visibility Mood · Evolution Mood",
				link: "#",
				image: "case_brand_3.webp",
			},
			{
				id: "case-04",
				title: ["RELAXING", "PETS"],
				description:
					"Mejoramos la salud mental viendo videos de mascotas. ¡Lo hicimos real!",
				tags: "Connection Mood · Evolution Mood",
				link: "#",
				image: "case_brand_4.webp",
			},
			{
				id: "case-05",
				title: ["DLK", "RESTAURANTES"],
				description:
					"Un grupo, diez marcas gastronómicas, un solo ecosistema digital. Desarrollamos el hub de DLK y los sitios de sus diez restaurantes en Colombia, con reservas integradas en cada marca: cada visita a un clic de convertirse en una mesa ocupada.",
				tags: "Build Mood · Evolution Mood",
				link: "#",
				image: "case_brand_5.webp",
			},
		],

		//Seccion Marcas (Brands)
		"brands.title.regular1": "MÁS DE 15 AÑOS ",
		"brands.title.bold1": "TRANSFORMANDO EL MOOD",
		"brands.title.regular2": " DE LAS MARCAS DE LATINOAMÉRICA ",
		"brands.title.bold2": "EN RESULTADOS REALES.",
		"brands.logos": [
			"comapan.webp",
			"cineColombia.webp",
			"roa.webp",
			"corona.webp",
			"totalEnergies.webp",
			"Kare.webp",
			"aua.webp",
			"boConcept.webp",
			"autoPartesYa.webp",
			"dahua.webp",
			"dlk.webp",
			"kg.webp",
			"merz.webp",
			"mepal.webp",
		],

		//Seccion Formulario (Forms)
		// Añade esto a la sección "es" de ui.ts
		"forms.contact.title.regular":
			"¿TU MARCA TIENE OBJETIVOS CLAROS Y GANAS DE TRANSFORMARSE?",
		"forms.contact.title.bold": "HABLEMOS.",
		"forms.contact.subtitle": "Déjanos tus datos",
		"forms.contact.fields": [
			{ id: "c-nombre", name: "nombre", label: "Nombre", type: "text" },
			{
				id: "c-correo",
				name: "correo",
				label: "Correo electrónico",
				type: "email",
			},
			{ id: "c-telefono", name: "telefono", label: "Teléfono", type: "tel" },
			{ id: "c-mensaje", name: "mensaje", label: "Mensaje", type: "text" },
		],
		"forms.contact.btn.submit": "ENVIAR MENSAJE",
		"forms.contact.btn.success": "MENSAJE ENVIADO",

		"forms.jobs.title.bold1": "THINK BIG.",
		"forms.jobs.title.regular": " STAY HUNGRY.",
		"forms.jobs.title.bold2": "MAKE IT HAPPEN.",
		"forms.jobs.subtitle": "Déjanos tus datos",
		"forms.jobs.fields": [
			{ id: "t-nombre", name: "nombre", label: "Nombre", type: "text" },
			{
				id: "t-correo",
				name: "correo",
				label: "Correo electrónico",
				type: "email",
			},
			{ id: "t-telefono", name: "telefono", label: "Teléfono", type: "tel" },
			{ id: "t-mensaje", name: "mensaje", label: "Mensaje", type: "text" },
		],
		"forms.jobs.uploadLabel": "Adjunta tu HV",
		"forms.jobs.btn.submit": "ENVIAR MENSAJE",
		"forms.jobs.btn.success": "MENSAJE ENVIADO",

		// Errores de validación
		"forms.error.required": "Este campo es obligatorio.",
		"forms.error.name": "Solo se permiten letras y espacios (2-50 caracteres).",
		"forms.error.email": "Por favor, ingresa un correo válido.",
		"forms.error.phone": "Solo números, espacios y +. (6-20 caracteres).",
		"forms.error.message": "El mensaje no puede exceder 2000 caracteres.",
		"forms.error.file.required": "Debes adjuntar un archivo (CV).",
		"forms.error.file.type": "Solo se aceptan archivos PDF, DOC o DOCX.",
		"forms.error.file.size": "El archivo supera los 5MB permitidos.",
		"forms.sending": "ENVIANDO...",
		"forms.error.server": "ERROR. REINTENTAR",

		//Seccion CTA (CTA)
		"cta.title.regular": "¿TIENES LO NECESARIO",
		"cta.title.bold": "PARA SER UN MOODER?",
		"cta.desc.before": "Haz",
		"cta.desc.link": "clic,",
		"cta.desc.after": "déjanos tus datos y cuéntanos por qué",

		//Seccion Footer (Footer)
		"footer.links": [
			{ label: "Nosotros", route: "#nosotros" },
			{ label: "Moodology", route: "#timeline" },
			{ label: "Trabajos", route: "#trabajos" },
			{ label: "Contacto", route: "#contacto" },
		],
		"footer.contact": [
			{
				label: "Email: desguerra@mood.com.co",
				url: "mailto:desguerra@mood.com.co",
				isBold: false,
			},
			{
				label: "WhatsApp / Teléfono: +57 310 561 1021",
				url: "tel:+573105611021",
				isBold: false,
			},
			{ label: "Ubicación: Bogotá, Colombia", url: null, isBold: false },
			{
				label: "Iniciemos un proyecto",
				url: "#contacto",
				isBold: false,
				formTrigger: "contacto",
			},
			{
				label: "Trabaja con nosotros",
				url: "#contacto",
				isBold: true,
				formTrigger: "trabaja",
			},
		],

		//Title Dinamico
		"seo.awayTitle": "¡Vuelve! Hablemos 🌶️",
	},
	en: {
		"header.tagline": "DIGITAL CREATIVE AGENCY",
		"nav.nosotros": "ABOUT US",
		"nav.timeline": "WHAT'S YOUR MOOD",
		"nav.trabajos": "WORKS",
		"nav.marcas": "BRANDS",
		"nav.contacto": "CONTACT",
		"nav.cta": "MOODERS",

		"hero.topText": ["WHEN IT", "MOVES", "THE BUSINESS."],
		"hero.bottomText": ["AN IDEA", "ONLY MATTERS"],

		// Sección Nosotros (About)
		"about.paragraph":
			"<strong>We are the partner that transforms creativity and strategy into real results.</strong> We read the business behind each brand, its objectives, its numbers, and its KPIs before creating. With that understanding, we develop brand platforms, campaigns, content, and ecosystems that respond to concrete goals, with results that are measured, optimized, and sustained over time.",
		"about.stats": [
			{ prefix: "+", target: 15, suffix: "", label: "YEARS" },
			{ prefix: "", target: 3, suffix: " COUNTRIES", label: "PER / COL / CAM" },
			{ prefix: "", target: 150, suffix: "", label: "PROFESSIONALS" },
			{ prefix: "", target: 45, suffix: "+", label: "CLIENTS" },
			{ prefix: "", target: 13, suffix: "", label: "AWARDS" },
		],

		//Seccion What'sYourMood (Timeline)
		"timeline.intro.topText":
			"Not all brands are in the same place. Some are just being born. Others are growing.<strong> Others are redefining what they will be tomorrow.</strong>",
		"timeline.intro.bottomText":
			"<strong>READING THAT MOOD</strong> IS READING THE BUSINESS, AND UNDERSTANDING IT <strong>CHANGES EVERYTHING.</strong>",
		"timeline.items": [
			{
				number: "01",
				title: "LAUNCH MOOD",
				description:
					"Your brand is born and ready for the world. We build the brand platform that gives it direction from day one: strategy and branding designed to hit the market with a clear course, not just a logo.",
			},
			{
				number: "02",
				title: "VISIBILITY MOOD",
				description:
					"You need to grab attention and stay in people's minds. We create ideas with direction: creativity designed to make your brand impossible to ignore and turn that attention into business value.",
			},
			{
				number: "03",
				title: "GROWTH MOOD",
				description:
					"You want to accelerate your brand's growth. Our strategy and performance team reads the opportunities behind your numbers and turns them into measurable growth.",
			},
			{
				number: "04",
				title: "CONNECTION MOOD",
				description:
					"You want people talking about your brand. We connect creativity and creators to spark culturally relevant conversations with one clear goal: making that conversation drive business.",
			},
			{
				number: "05",
				title: "EVOLUTION MOOD",
				description:
					"You want to transform the experience of those interacting with your brand. Performance, media, and UX working together so every interaction translates into measurable results.",
			},
			{
				number: "06",
				title: "CREATOR MOOD",
				description:
					"You want people to believe in your brand. Our Creator Hub connects your brand with the right voices to build real influence and long-lasting credibility.",
			},
			{
				number: "07",
				title: "BUILD MOOD",
				description:
					"Your brand needs digital infrastructure to operate and sell. We design and develop websites, platforms, and web ecosystems built on strategy: designed to convert visitors into clients and support business growth.",
			},
			{
				number: "08",
				title: "AI MOOD",
				description:
					"Your goal is to multiply your capabilities. We produce with AI: broadcast-quality video and content with tighter budgets and shorter timelines, without compromising the final result. More production, same creative standard, better numbers.",
			},
		],

		//Seccion Trabajos (Cases)
		"cases.header.regular": "TRANSFORMATIONS",
		"cases.header.bold": "YOU CAN SEE (AND MEASURE).",
		"cases.btn": "VIEW CASE",
		"cases.items": [
			{
				id: "case-01",
				title: ["TOUCHED", "BY THE SUN"],
				description:
					"We transformed the weather into the engine of our campaign.",
				tags: "Visibility Mood · Connection Mood",
				link: "#",
				image: "case_brand_1.webp",
			},
			{
				id: "case-02",
				title: ["COMAPANTASTIC", "CHRISTMAS"],
				description:
					"We took ownership of the most important season of the year like no one had ever done in the category.",
				tags: "Growth Mood · Visibility Mood · Connection Mood",
				link: "#",
				image: "case_brand_2.webp",
			},
			{
				id: "case-03",
				title: ["IF THERE'S", "CINEMA"],
				description: "Every premiere is a new story to tell.",
				tags: "Launch Mood · Visibility Mood · Evolution Mood",
				link: "#",
				image: "case_brand_3.webp",
			},
			{
				id: "case-04",
				title: ["RELAXING", "PETS"],
				description:
					"We improved mental health by watching pet videos. We made it real!",
				tags: "Connection Mood · Evolution Mood",
				link: "#",
				image: "case_brand_4.webp",
			},
			{
				id: "case-05",
				title: ["DLK", "RESTAURANTS"],
				description:
					"One group, ten gastronomic brands, a single digital ecosystem. We developed the DLK hub and the websites for its ten restaurants in Colombia, with integrated reservations in each brand.",
				tags: "Build Mood · Evolution Mood",
				link: "#",
				image: "case_brand_5.webp",
			},
		],

		//Seccion Marcas (Brands)
		"brands.title.regular1": "OVER 15 YEARS ",
		"brands.title.bold1": "TRANSFORMING THE MOOD",
		"brands.title.regular2": " OF LATIN AMERICAN BRANDS ",
		"brands.title.bold2": "INTO REAL RESULTS.",
		"brands.logos": [
			"comapan.webp",
			"cineColombia.webp",
			"roa.webp",
			"corona.webp",
			"totalEnergies.webp",
			"Kare.webp",
			"aua.webp",
			"boConcept.webp",
			"autoPartesYa.webp",
			"dahua.webp",
			"dlk.webp",
			"kg.webp",
			"merz.webp",
			"mepal.webp",
		],

		//Seccion Formulario (Forms)
		"forms.contact.title.regular":
			"DOES YOUR BRAND HAVE CLEAR GOALS AND A DESIRE TO TRANSFORM?",
		"forms.contact.title.bold": "LET'S TALK.",
		"forms.contact.subtitle": "Leave us your details",
		"forms.contact.fields": [
			{ id: "c-nombre", name: "nombre", label: "Name", type: "text" },
			{ id: "c-correo", name: "correo", label: "Email", type: "email" },
			{ id: "c-telefono", name: "telefono", label: "Phone", type: "tel" },
			{ id: "c-mensaje", name: "mensaje", label: "Message", type: "text" },
		],
		"forms.contact.btn.submit": "SEND MESSAGE",
		"forms.contact.btn.success": "MESSAGE SENT",

		"forms.jobs.title.bold1": "THINK BIG.",
		"forms.jobs.title.regular": " STAY HUNGRY.",
		"forms.jobs.title.bold2": "MAKE IT HAPPEN.",
		"forms.jobs.subtitle": "Leave us your details",
		"forms.jobs.fields": [
			{ id: "t-nombre", name: "nombre", label: "Name", type: "text" },
			{ id: "t-correo", name: "correo", label: "Email", type: "email" },
			{ id: "t-telefono", name: "telefono", label: "Phone", type: "tel" },
			{ id: "t-mensaje", name: "mensaje", label: "Message", type: "text" },
		],
		"forms.jobs.uploadLabel": "Attach your CV",
		"forms.jobs.btn.submit": "SEND MESSAGE",
		"forms.jobs.btn.success": "MESSAGE SENT",

		// Errores de validación
		"forms.error.required": "This field is required.",
		"forms.error.name": "Only letters and spaces allowed (2-50 characters).",
		"forms.error.email": "Please enter a valid email.",
		"forms.error.phone": "Only numbers, spaces, and +. (6-20 characters).",
		"forms.error.message": "Message cannot exceed 2000 characters.",
		"forms.error.file.required": "You must attach a file (CV).",
		"forms.error.file.type": "Only PDF, DOC, or DOCX files are accepted.",
		"forms.error.file.size": "File exceeds the 5MB limit.",
		"forms.sending": "SENDING...",
		"forms.error.server": "ERROR. TRY AGAIN",

		//Seccion CTA (CTA)
		"cta.title.regular": "DO YOU HAVE WHAT IT TAKES",
		"cta.title.bold": "TO BE A MOODER?",
		"cta.desc.before": "Click",
		"cta.desc.link": "here,",
		"cta.desc.after": "leave your details and tell us why",

		//Seccion Footer (Footer)
		"footer.links": [
			{ label: "About Us", route: "#nosotros" },
			{ label: "Moodology", route: "#timeline" },
			{ label: "Works", route: "#trabajos" },
			{ label: "Contact", route: "#contacto" },
		],
		"footer.contact": [
			{
				label: "Email: desguerra@mood.com.co",
				url: "mailto:desguerra@mood.com.co",
				isBold: false,
			},
			{
				label: "WhatsApp / Phone: +57 310 561 1021",
				url: "tel:+573105611021",
				isBold: false,
			},
			{ label: "Location: Bogota, Colombia", url: null, isBold: false },
			{
				label: "Let's start a project",
				url: "#contacto",
				isBold: false,
				formTrigger: "contacto",
			},
			{
				label: "Work with us",
				url: "#contacto",
				isBold: true,
				formTrigger: "trabaja",
			},
		],

		//Title Dinamica
		"seo.awayTitle": "Come back! Let's talk 🌶️",
	},
} as const;
