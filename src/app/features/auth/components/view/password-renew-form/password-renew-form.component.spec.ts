import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordRenewFormComponent } from './password-renew-form.component';

describe('PasswordRenewFormComponent', () => {
  let spectator: Spectator<PasswordRenewFormComponent>;
  const createComponent = createComponentFactory(PasswordRenewFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
