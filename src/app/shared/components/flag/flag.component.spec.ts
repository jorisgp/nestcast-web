import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FlagComponent } from './flag.component';

describe('FlagComponent', () => {
  let spectator: Spectator<FlagComponent>;
  const createComponent = createComponentFactory(FlagComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
