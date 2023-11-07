import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignInComponent } from './sign-in-form.component';

describe('SignInComponent', () => {
  let spectator: Spectator<SignInComponent>;
  const createComponent = createComponentFactory(SignInComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
