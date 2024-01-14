export type Country = {
  name: string;
  code: string;
  language: Language;
  default?: boolean;
};

export enum Language {
  NL = 'nl',
  EN = 'en',
  FR = 'fr',
  ES = 'es',
  DE = 'de',
  IT = 'it',
  PL = 'pl',
  PT = 'pt',
  RU = 'ru',
  TR = 'tr',
  ZH = 'zh',
}
