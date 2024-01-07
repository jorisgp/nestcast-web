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
  id?: string;
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
  image: string;
};

export type Episode = {
  id?: string;
  title: string;
  description: string;
  type: string;
  keywords: string[];
  season: number;
  episode: number;
  explicit: boolean;
  show: { id: string };
  audio: string;
  audioFile?: File;
  image: string;
};
