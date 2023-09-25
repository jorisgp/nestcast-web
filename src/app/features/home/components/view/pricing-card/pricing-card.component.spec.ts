import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PricingCardComponent } from './pricing-card.component';

describe('PricingCardComponent', () => {
  let spectator: Spectator<PricingCardComponent>;
  const createComponent = createComponentFactory(PricingCardComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
