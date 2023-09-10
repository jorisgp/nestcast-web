import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let spectator: Spectator<SignUpComponent>;
  const createComponent = createComponentFactory(SignUpComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
