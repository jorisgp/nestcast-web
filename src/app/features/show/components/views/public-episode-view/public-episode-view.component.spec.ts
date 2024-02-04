import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PublicEpisodeViewComponent } from './public-episode-view.component';

describe('PublicEpisodeViewComponent', () => {
  let spectator: Spectator<PublicEpisodeViewComponent>;
  const createComponent = createComponentFactory(PublicEpisodeViewComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
