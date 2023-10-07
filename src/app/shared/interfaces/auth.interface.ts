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

export interface WaitingList {
  firstName: string;
  lastName: string;
  email: string;
}
