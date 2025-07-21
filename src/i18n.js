import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Example translations
const resources = {
  en: {
    translation: {
      services: "Services",
      careers: "Careers",
      contact: "Contact Us",
      bodeHub: "Bode Hub",
      trackShipment: "Track Shipment",
      searchPlaceholder: "Search...",
    },
  },
  fr: {
    translation: {
      services: "Services",
      careers: "Carrières",
      contact: "Contactez-nous",
      bodeHub: "Bode Hub",
      trackShipment: "Suivi d'expédition",
      searchPlaceholder: "Recherche...",
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
