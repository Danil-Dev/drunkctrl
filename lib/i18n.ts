import { ru } from "./dict/ru";
import { uk } from "./dict/uk";
import { en } from "./dict/en";

export const locales = ["ru", "uk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

// ru is the canonical shape — uk/en are typed against it (`satisfies Dict`) so a missing
// key in a translation is a compile error.
export type Dict = typeof ru;

const DICTS: Record<Locale, Dict> = { ru, uk, en };

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function getDictionary(lang: Locale): Dict {
  return DICTS[lang] ?? ru;
}
