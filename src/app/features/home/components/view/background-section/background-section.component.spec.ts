import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { BackgroundSectionComponent } from './background-section.component';

describe('BackgroundSectionComponent', () => {
  let spectator: Spectator<BackgroundSectionComponent>;
  const createComponent = createComponentFactory(BackgroundSectionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
