import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NestCastHttpService } from './nest-cast-http.service';

describe('NestCastHttpService', () => {
  let spectator: SpectatorService<NestCastHttpService>;
  const createService = createServiceFactory(NestCastHttpService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});