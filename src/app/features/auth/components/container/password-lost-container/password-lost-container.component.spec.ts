import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordLostContainerComponent } from './password-lost-container.component';

describe('PasswordLostContainerComponent', () => {
  let spectator: Spectator<PasswordLostContainerComponent>;
  const createComponent = createComponentFactory(PasswordLostContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
