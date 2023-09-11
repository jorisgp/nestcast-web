import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  let spectator: Spectator<SignUpFormComponent>;
  const createComponent = createComponentFactory(SignUpFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
