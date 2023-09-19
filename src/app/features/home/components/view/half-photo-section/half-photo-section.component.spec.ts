import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HalfPhotoSectionComponent } from './half-photo-section.component';

describe('HalfPhotoSectionComponent', () => {
  let spectator: Spectator<HalfPhotoSectionComponent>;
  const createComponent = createComponentFactory(HalfPhotoSectionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
