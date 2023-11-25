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
}
