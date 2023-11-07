import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShowsPageComponent } from './shows-page.component';

describe('ShowsPageComponent', () => {
  let spectator: Spectator<ShowsPageComponent>;
  const createComponent = createComponentFactory(ShowsPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
