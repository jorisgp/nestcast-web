import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignUpContainerComponent } from './sign-up-container.component';

describe('SignUpContainerComponent', () => {
  let spectator: Spectator<SignUpContainerComponent>;
  const createComponent = createComponentFactory(SignUpContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
