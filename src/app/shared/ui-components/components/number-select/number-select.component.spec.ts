import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NumberSelectComponent } from './number-select.component';

describe('NumberSelectComponent', () => {
  let spectator: Spectator<NumberSelectComponent>;
  const createComponent = createComponentFactory(NumberSelectComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
