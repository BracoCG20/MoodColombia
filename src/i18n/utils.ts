import { ui, defaultLang, routes } from "./ui";

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function getTranslatedRoute(path: keyof typeof routes, lang: Lang) {
	if (lang === "es") return path;
	const englishPath = routes[path];
	return `/en${englishPath === "/" ? "" : englishPath}`;
}
