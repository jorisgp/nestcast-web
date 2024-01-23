import { Feature, NestCastConfig } from './environment.model';

export const environment: NestCastConfig = {
  host: 'http://localhost:4200',
  production: false,
  apiPrefix: true,
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
