import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EpisodesPageComponent } from './episodes-page.component';

describe('EpisodesPageComponent', () => {
  let spectator: Spectator<EpisodesPageComponent>;
  const createComponent = createComponentFactory(EpisodesPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
