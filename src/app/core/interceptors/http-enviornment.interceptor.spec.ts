import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { environment } from '../../../environments/environment';
import { HttpEnvironmentInterceptor } from './http-environment.interceptor';

jest.mock('../../../environments/environment');
describe('HttpEnvironmentInterceptor', () => {
  let spectator: SpectatorService<HttpEnvironmentInterceptor>;
  const createService = createServiceFactory(HttpEnvironmentInterceptor);

  const mockedHandleFunction = jest.fn();
  const nextMock = { handle: mockedHandleFunction } as any;

  const originalUrl = '/api/original-url';

  beforeEach(() => {
    spectator = createService();
    (environment as any) = {
      apiPrefix: true,
      apiUrl: 'http://api-url',
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('handle environments', () => {
    const returnUrl = 'http://api-url/api/original-url';

    const mockedCloneFunction = jest
      .fn()
      .mockReturnValue({ newurl: returnUrl });

    const reqMock = {
      url: '/api/original-url',
      clone: mockedCloneFunction,
    } as any;

    it('should intercept request and create api url ', () => {
      spectator.service.intercept(reqMock, nextMock);
      expect(mockedCloneFunction).toBeCalledWith({ url: returnUrl });
      expect(mockedHandleFunction).toBeCalledWith({ newurl: returnUrl });
    });
  });

  describe('handle url with local backend', () => {
    it('should strip api of incase of backend is running locally', () => {
      const returnUrl = 'http://api-url/original-url';

      spectator = createService();
      (environment as any) = {
        apiPrefix: false,
        apiUrl: 'http://api-url',
      };

      const mockedCloneFunction = jest
        .fn()
        .mockReturnValue({ newurl: returnUrl });

      const reqMock = {
        url: originalUrl,
        clone: mockedCloneFunction,
      } as any;
      const nextMock = { handle: mockedHandleFunction } as any;

      spectator.service.intercept(reqMock, nextMock);
      expect(mockedCloneFunction).toBeCalledWith({ url: returnUrl });
      expect(mockedHandleFunction).toBeCalledWith({ newurl: returnUrl });
    });
  });
});
