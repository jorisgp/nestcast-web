import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let spectator: Spectator<IconComponent>;
  const createComponent = createComponentFactory(IconComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
