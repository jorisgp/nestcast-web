import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let spectator: Spectator<ModalComponent>;
  const createComponent = createComponentFactory(ModalComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
