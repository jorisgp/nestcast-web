import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordRenewPageComponent } from './password-renew-page.component';

describe('PasswordRenewPageComponent', () => {
  let spectator: Spectator<PasswordRenewPageComponent>;
  const createComponent = createComponentFactory(PasswordRenewPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
