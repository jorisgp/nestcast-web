import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShowPageComponent } from './show-page.component';

describe('ShowPageComponent', () => {
  let spectator: Spectator<ShowPageComponent>;
  const createComponent = createComponentFactory(ShowPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
