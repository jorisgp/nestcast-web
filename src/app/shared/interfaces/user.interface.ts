import { Language } from '../model/models';

export type User = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  language: Language;
};

export type Confirmation = {
  confirmationCode: number;
};

export type Show = {
  title: string;
  description: string;
  author: string;
  email: string;
  copyright: string;
  language: string;
  category: string;
  subCategory: string;
  explicit: boolean;
  keywords: string[];
};
