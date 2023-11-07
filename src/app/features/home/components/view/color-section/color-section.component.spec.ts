import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ColorSectionComponent } from './color-section.component';

describe('ColorSectionComponent', () => {
  let spectator: Spectator<ColorSectionComponent>;
  const createComponent = createComponentFactory(ColorSectionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
