import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PasswordLostPageComponent } from './password-lost-page.component';

describe('PasswordLostPageComponent', () => {
  let spectator: Spectator<PasswordLostPageComponent>;
  const createComponent = createComponentFactory(PasswordLostPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
