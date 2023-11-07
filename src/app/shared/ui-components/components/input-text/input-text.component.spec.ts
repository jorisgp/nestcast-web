import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let spectator: Spectator<InputTextComponent>;
  const createComponent = createComponentFactory(InputTextComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
