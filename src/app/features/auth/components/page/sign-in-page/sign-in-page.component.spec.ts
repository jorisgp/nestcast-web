import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignInPageComponent } from './sign-in-page.component';

describe('SignInPageComponent', () => {
  let spectator: Spectator<SignInPageComponent>;
  const createComponent = createComponentFactory(SignInPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
