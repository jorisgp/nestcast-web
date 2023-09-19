import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { LandingPageContainerComponent } from './landing-page-container.component';

describe('LandingPageContainerComponent', () => {
  let spectator: Spectator<LandingPageContainerComponent>;
  const createComponent = createComponentFactory(LandingPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
