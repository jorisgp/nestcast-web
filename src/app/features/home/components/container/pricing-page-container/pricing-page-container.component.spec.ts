import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PricingPageContainerComponent } from './pricing-page-container.component';

describe('PricingPageContainerComponent', () => {
  let spectator: Spectator<PricingPageContainerComponent>;
  const createComponent = createComponentFactory(PricingPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
