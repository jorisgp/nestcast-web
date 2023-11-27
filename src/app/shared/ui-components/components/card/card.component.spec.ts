import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let spectator: Spectator<CardComponent>;
  const createComponent = createComponentFactory(CardComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
