import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          "Empowering Mothers, Nurturing Futures": "Empowering Mothers, Nurturing Futures",
          "Evidence-based maternal care for a healthier Ghana.": "Evidence-based maternal care for a healthier Ghana.",
          "Login": "Login",
          "Sign Up": "Sign Up",
          "Sign in to your account": "Sign in to your account",
          "Email address": "Email address",
          "Password": "Password",
          "Don't have an account? Sign up": "Don't have an account? Sign up",
          "Sign in": "Sign in",
          "Create a new account": "Create a new account",
          "Confirm password": "Confirm password",
          "Already have an account? Sign in": "Already have an account? Sign in",
          "Passwords do not match": "Passwords do not match"
        }
      },
      twi: {
        translation: {
          "Empowering Mothers, Nurturing Futures": "Mmaatan a wɔhyɛ wɔn den, daakye a wɔhwɛ ma ɛyɛ yie",
          "Evidence-based maternal care for a healthier Ghana.": "Ɔhwɛ a egyina adanse so ma Ghana a ɛwɔ apɔwmuden",
          "Login": "Kɔ mu",
          "Sign Up": "Kyerɛw din",
          "Sign in to your account": "Kɔ wo akɔnt mu",
          "Email address": "Email adrɛɛse",
          "Password": "Asumasɛm",
          "Don't have an account? Sign up": "Wonnim akɔnt? Kyerɛw din",
          "Sign in": "Kɔ mu",
          "Create a new account": "Yɛ akɔnt foforo",
          "Confirm password": "Si asumasɛm so dua",
          "Already have an account? Sign in": "Wowɔ akɔnt dedaw? Kɔ mu",
          "Passwords do not match": "Asumasɛm no nhyia"
        }
      }
    }
  });

export default i18n;
