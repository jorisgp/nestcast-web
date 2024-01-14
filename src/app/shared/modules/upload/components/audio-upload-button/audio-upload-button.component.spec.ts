import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AudioUploadButtonComponent } from './audio-upload-button.component';

describe('AudioUploadButtonComponent', () => {
  let spectator: Spectator<AudioUploadButtonComponent>;
  const createComponent = createComponentFactory(AudioUploadButtonComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
