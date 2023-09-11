import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordLostFormComponent } from './password-lost-form.component';

describe('PasswordLostFormComponent', () => {
  let spectator: Spectator<PasswordLostFormComponent>;
  const createComponent = createComponentFactory(PasswordLostFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
