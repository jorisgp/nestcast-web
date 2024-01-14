import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let spectator: SpectatorService<ModalService>;
  const createService = createServiceFactory(ModalService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});