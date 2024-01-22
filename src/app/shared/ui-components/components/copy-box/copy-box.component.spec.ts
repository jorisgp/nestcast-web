import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CopyBoxComponent } from './copy-box.component';

describe('CopyBoxComponent', () => {
  let spectator: Spectator<CopyBoxComponent>;
  const createComponent = createComponentFactory(CopyBoxComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
