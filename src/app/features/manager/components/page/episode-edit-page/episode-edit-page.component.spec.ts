import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodeEditPageComponent } from './episode-edit-page.component';

describe('EpisodeEditPageComponent', () => {
  let spectator: Spectator<EpisodeEditPageComponent>;
  const createComponent = createComponentFactory(EpisodeEditPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
