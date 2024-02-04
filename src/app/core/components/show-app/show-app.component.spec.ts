import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShowAppComponent } from './show-app.component';

describe('ShowAppComponent', () => {
  let spectator: Spectator<ShowAppComponent>;
  const createComponent = createComponentFactory(ShowAppComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
