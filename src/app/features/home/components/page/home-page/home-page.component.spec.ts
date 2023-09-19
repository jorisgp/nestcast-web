import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let spectator: Spectator<HomePageComponent>;
  const createComponent = createComponentFactory(HomePageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
