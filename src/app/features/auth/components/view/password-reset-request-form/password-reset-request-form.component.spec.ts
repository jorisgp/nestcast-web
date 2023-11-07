import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordResetRequestFormComponent } from './password-reset-request-form.component';

describe('PasswordLostFormComponent', () => {
  let spectator: Spectator<PasswordResetRequestFormComponent>;
  const createComponent = createComponentFactory(
    PasswordResetRequestFormComponent
  );

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
