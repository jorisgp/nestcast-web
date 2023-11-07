import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PricingPageComponent } from './pricing-page.component';

describe('PricingPageComponent', () => {
  let spectator: Spectator<PricingPageComponent>;
  const createComponent = createComponentFactory(PricingPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
