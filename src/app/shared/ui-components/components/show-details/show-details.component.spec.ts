import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShowDetailsComponent } from './show-details.component';

describe('ShowDetailsComponent', () => {
  let spectator: Spectator<ShowDetailsComponent>;
  const createComponent = createComponentFactory(ShowDetailsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
