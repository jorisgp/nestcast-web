export interface Login {
  username: string;
  password: string;
}

export interface PasswordRequestReset {
  username: string;
}

export interface PasswordReset {
  newPassword: string;
  token: string;
}

export interface Token {
  accessToken: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface BaseResponse {
  created: Date;
  updated: Date;
  version: number;
  id: string;
}

export interface WaitingList {
  firstName: string;
  lastName: string;
  email: string;
  agreeContactTerms: boolean;
  agreeTerms: boolean;
  confirmed: boolean;
}

export interface WaitingListConfirmation {
  id: string;
  confirmationCode: number;
  confirmed: boolean;
}

export interface WaitingListDetails extends WaitingList, BaseResponse {
  confirmed: boolean;
}

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  agreeContactTerms: boolean;
  confirmed: boolean;
}

export interface ContactConfirmation {
  id: string;
  confirmationCode: number;
  confirmed: boolean;
}

export interface ContactDetails extends WaitingList, BaseResponse {
  confirmed: boolean;
}
