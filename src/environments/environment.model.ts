export type NestCastConfig = {
  production: boolean;
  apiPrefix: boolean;
  apiUrl: string;
  featureFlags: FeatureFlags;
};

type FeatureFlags = {
  signIn: FeatureFlag;
  signUp: FeatureFlag;
};

type FeatureFlag = {
  visible: boolean;
  accessible: boolean;
};

export enum Feature {
  SignIn = 'signIn',
  SignUp = 'signUp',
}
