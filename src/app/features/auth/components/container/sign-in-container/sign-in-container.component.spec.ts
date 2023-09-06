import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignInContainerComponent } from './sign-in-container.component';

describe('SignInContainerComponent', () => {
  let spectator: Spectator<SignInContainerComponent>;
  const createComponent = createComponentFactory(SignInContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
