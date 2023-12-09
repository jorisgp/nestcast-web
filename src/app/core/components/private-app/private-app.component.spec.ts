import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PrivateAppComponent } from './private-app.component';

describe('PrivateAppComponent', () => {
  let spectator: Spectator<PrivateAppComponent>;
  const createComponent = createComponentFactory(PrivateAppComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
