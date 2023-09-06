import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let spectator: SpectatorService<AuthService>;
  const createService = createServiceFactory(AuthService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});