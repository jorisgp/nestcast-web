import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordRenewContainerComponent } from './password-renew-container.component';

describe('PasswordRenewContainerComponent', () => {
  let spectator: Spectator<PasswordRenewContainerComponent>;
  const createComponent = createComponentFactory(PasswordRenewContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
