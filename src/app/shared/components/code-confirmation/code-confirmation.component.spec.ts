import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CodeConfirmationComponent } from './code-confirmation.component';

describe('CodeConfirmationComponent', () => {
  let spectator: Spectator<CodeConfirmationComponent>;
  const createComponent = createComponentFactory(CodeConfirmationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
