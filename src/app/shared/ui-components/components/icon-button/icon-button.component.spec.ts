import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let spectator: Spectator<IconButtonComponent>;
  const createComponent = createComponentFactory(IconButtonComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
