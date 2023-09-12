export interface Login {
  username: string;
  password: string;
}

export interface PasswordResetRequest {
  username: string;
}

export interface PasswordReset {
  newPassword: string;
  token: string;
}

export interface Token {
  accessToken: string;
}
