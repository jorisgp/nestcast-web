import { Feature, NestCastConfig } from './environment.model';

export const environment: NestCastConfig = {
  production: false,
  apiPrefix: false,
  apiUrl: 'http://localhost:8080',
  featureFlags: {
    [Feature.SignIn]: {
      visible: false,
      accessible: true,
    },
    [Feature.SignUp]: {
      visible: false,
      accessible: true,
    },
  },
};

export { Feature };
