export type Country = {
  name: string;
  code: string;
  language: Language;
};

export enum Language {
  NL = 'nl',
  EN = 'en',
  FR = 'fr',
}
