import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodeTypeSelectComponent } from './episode-type-select.component';

describe('EpisodeTypeSelectComponent', () => {
  let spectator: Spectator<EpisodeTypeSelectComponent>;
  const createComponent = createComponentFactory(EpisodeTypeSelectComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
