import { Feature, NestCastConfig } from './environment.model';

export const environment: NestCastConfig = {
  production: false,
  apiPrefix: false,
  apiUrl: 'http://localhost:8080',
  featureFlags: {
    [Feature.SignIn]: {
      visible: true,
      accessible: true,
    },
    [Feature.SignUp]: {
      visible: true,
      accessible: true,
    },
  },
};

export { Feature };
