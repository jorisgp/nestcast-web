import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HeaderPrivateComponent } from './header-private.component';

describe('HeaderPrivateComponent', () => {
  let spectator: Spectator<HeaderPrivateComponent>;
  const createComponent = createComponentFactory(HeaderPrivateComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
