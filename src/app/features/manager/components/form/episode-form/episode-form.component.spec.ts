import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodeFormComponent } from './episode-form.component';

describe('EpisodeFormComponent', () => {
  let spectator: Spectator<EpisodeFormComponent>;
  const createComponent = createComponentFactory(EpisodeFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
