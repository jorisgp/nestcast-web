import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DistributionPageContainerComponent } from './distribution-page-container.component';

describe('DistributionPageContainerComponent', () => {
  let spectator: Spectator<DistributionPageContainerComponent>;
  const createComponent = createComponentFactory(DistributionPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
