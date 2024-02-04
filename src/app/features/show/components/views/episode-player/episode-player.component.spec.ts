import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodePlayerComponent } from './episode-player.component';

describe('EpisodePlayerComponent', () => {
  let spectator: Spectator<EpisodePlayerComponent>;
  const createComponent = createComponentFactory(EpisodePlayerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
