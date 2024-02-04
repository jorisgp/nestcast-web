import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RoundIconButtonComponent } from './round-icon-button.component';

describe('RoundIconButtonComponent', () => {
  let spectator: Spectator<RoundIconButtonComponent>;
  const createComponent = createComponentFactory(RoundIconButtonComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
