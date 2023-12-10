import { Language } from '../model/models';

export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  language: Language;
}

export interface Confirmation {
  confirmationCode: number;
}

export interface Show {
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
}
