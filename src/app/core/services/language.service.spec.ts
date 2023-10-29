import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let spectator: SpectatorService<LanguageService>;
  const createService = createServiceFactory(LanguageService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});