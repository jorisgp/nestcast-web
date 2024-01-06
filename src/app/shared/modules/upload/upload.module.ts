import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { AudioUploadButtonComponent } from './components/audio-upload-button/audio-upload-button.component';
import { ImageUploadButtonComponent } from './components/image-upload-button/image-upload-button.component';
import { DropFileDirective } from './directives/drop-file.directive';

@NgModule({
  declarations: [
    ImageUploadButtonComponent,
    DropFileDirective,
    AudioUploadButtonComponent,
  ],
  imports: [CommonModule, UiComponentsModule],
  exports: [ImageUploadButtonComponent, AudioUploadButtonComponent],
})
export class UploadModule {}
