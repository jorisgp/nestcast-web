import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordResetRequestContainerComponent } from './password-reset-request-container.component';

describe('PasswordLostContainerComponent', () => {
  let spectator: Spectator<PasswordResetRequestContainerComponent>;
  const createComponent = createComponentFactory(
    PasswordResetRequestContainerComponent
  );

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
