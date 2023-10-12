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
  active: boolean;
}

export interface WaitingListConfirm {
  id: string;
  code: string;
  active: boolean;
}

export interface WaitingListDetails extends WaitingList, BaseResponse {}
