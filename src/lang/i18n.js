import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { es } from "./es";
import { en } from "./en"

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  }
};



i18n.use(initReactI18next).init({
    resources,
    lang: "es",
    keySeparator: false
});


export default i18n;

/*

const instance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ru'],
  keySeparator: false
})

export default instance
*/
