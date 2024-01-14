import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DistributionPageComponent } from './distribution-page.component';

describe('DistributionPageComponent', () => {
  let spectator: Spectator<DistributionPageComponent>;
  const createComponent = createComponentFactory(DistributionPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
