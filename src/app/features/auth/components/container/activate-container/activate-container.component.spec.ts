import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ActivateContainerComponent } from './activate-container.component';

describe('SignUpContainerComponent', () => {
  let spectator: Spectator<ActivateContainerComponent>;
  const createComponent = createComponentFactory(ActivateContainerComponent);

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
