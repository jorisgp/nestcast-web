import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodeDetailsComponent } from './episode-details.component';

describe('EpisodeDetailsComponent', () => {
  let spectator: Spectator<EpisodeDetailsComponent>;
  const createComponent = createComponentFactory(EpisodeDetailsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
