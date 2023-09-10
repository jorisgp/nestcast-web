import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NestcastHttpService } from './nestcast-http.service';

describe('NestcastHttpService', () => {
  let spectator: SpectatorService<NestcastHttpService>;
  const createService = createServiceFactory(NestcastHttpService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});