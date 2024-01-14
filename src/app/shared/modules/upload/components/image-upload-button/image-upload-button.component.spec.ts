import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ImageUploadButtonComponent } from './image-upload-button.component';

describe('ImageUploadButtonComponent', () => {
  let spectator: Spectator<ImageUploadButtonComponent>;
  const createComponent = createComponentFactory(ImageUploadButtonComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
