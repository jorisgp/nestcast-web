import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PublicAppComponent } from './public-app.component';

describe('PublicAppComponent', () => {
  let spectator: Spectator<PublicAppComponent>;
  const createComponent = createComponentFactory(PublicAppComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
