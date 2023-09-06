import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignUpPageComponent } from './sign-up-page.component';

describe('SignUpPageComponent', () => {
  let spectator: Spectator<SignUpPageComponent>;
  const createComponent = createComponentFactory(SignUpPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
