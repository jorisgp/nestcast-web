import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PlayButtonViewComponent } from './play-button-view.component';

describe('PlayButtonViewComponent', () => {
  let spectator: Spectator<PlayButtonViewComponent>;
  const createComponent = createComponentFactory(PlayButtonViewComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
