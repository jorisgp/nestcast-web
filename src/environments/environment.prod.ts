import { Feature, NestCastConfig } from './environment.model';

export const environment: NestCastConfig = {
  production: true,
  apiPrefix: true,
  apiUrl: 'https://nestcast.net',
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
