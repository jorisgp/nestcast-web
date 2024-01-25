import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ImageCropperComponent } from './image-cropper.component';

describe('ImageCropperComponent', () => {
  let spectator: Spectator<ImageCropperComponent>;
  const createComponent = createComponentFactory(ImageCropperComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
