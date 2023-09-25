import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AboutPageComponent } from './about-page.component';

describe('AboutPageComponent', () => {
  let spectator: Spectator<AboutPageComponent>;
  const createComponent = createComponentFactory(AboutPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
