import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "My posts": "My posts",
      "Title": "Title",
      "Body": "Body",
      "Img": "Image URL",
      "CreateNew": "Create a new post",
      "Create": "Create",
      "Delete": "Delete",
      "Noposts": "No posts available",
      "Error":"Error",
      "NotSaved": "Post not saved"
    }
  },
  es: {
    translation: {
      "My posts": "Mis posts",
      "Title": "Título",
      "Body": "Cuerpo",
      "Img": "URL de la imagen",
      "CreateNew": "Crear un nuevo post",
      "Create": "Crear",
      "Delete": "Eliminar",
      "Noposts": "No hay posts disponibles",
      "Error":"Error",
      "NotSaved": "No se ha podido guardar el post"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;