import * as Localization from "expo-localization";
import viJSON from "./vi.json";
import enJSON from "./en.json";
import i18n from "i18n-js";

export function setUpTranslation() {
  i18n.translations = {
    vi: viJSON,
    en: enJSON,
  };
}

export function setUpLocale() {
  // Set the locale once at the beginning of your app.
  i18n.locale = Localization.locale;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;
}

export function translator(value: string) {
  return i18n.t(value);
}
