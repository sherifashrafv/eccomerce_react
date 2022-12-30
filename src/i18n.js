import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "../src/locales/en.json";
import arLocale from "../src/locales/ar.json";
// import LanguageDetector from "i18next-language-detector";

const resources = {
  en: {
    translation: enLocale,
  },
  ar: {
    translation: arLocale,
  },
};
i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;
