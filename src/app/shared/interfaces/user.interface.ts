import { Language } from '../model/models';

export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  language: Language;
}
