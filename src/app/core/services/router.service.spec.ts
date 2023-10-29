import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { RouterService } from './router.service';

describe('RouterService', () => {
  let spectator: SpectatorService<RouterService>;
  const createService = createServiceFactory(RouterService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});