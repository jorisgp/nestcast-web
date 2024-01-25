import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { AudioUploadButtonComponent } from './components/audio-upload-button/audio-upload-button.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { ImageUploadButtonComponent } from './components/image-upload-button/image-upload-button.component';
import { DropFileDirective } from './directives/drop-file.directive';

@NgModule({
  declarations: [
    ImageUploadButtonComponent,
    DropFileDirective,
    AudioUploadButtonComponent,
    ImageCropperComponent,
  ],
  imports: [CommonModule, UiComponentsModule, ImageCropperModule],
  exports: [ImageUploadButtonComponent, AudioUploadButtonComponent],
})
export class UploadModule {}
