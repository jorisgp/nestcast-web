import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordResetFormComponent } from './password-reset-form.component';

describe('PasswordResetFormComponent', () => {
  let spectator: Spectator<PasswordResetFormComponent>;
  const createComponent = createComponentFactory(PasswordResetFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
