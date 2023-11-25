import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { PlatformService } from './platform.service';

describe('WindowService', () => {
  let spectator: SpectatorService<PlatformService>;
  const createService = createServiceFactory(PlatformService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
