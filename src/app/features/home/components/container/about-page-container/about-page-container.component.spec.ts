import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AboutPageContainerComponent } from './about-page-container.component';

describe('AboutPageContainerComponent', () => {
  let spectator: Spectator<AboutPageContainerComponent>;
  const createComponent = createComponentFactory(AboutPageContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
