import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { StackItemComponent } from './stack-item.component';

describe('StackItemComponent', () => {
  let spectator: Spectator<StackItemComponent>;
  const createComponent = createComponentFactory(StackItemComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
