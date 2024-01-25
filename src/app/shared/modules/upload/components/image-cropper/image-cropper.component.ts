import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageCroppedEvent, OutputFormat } from 'ngx-image-cropper';
import { ModalInterface } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements ModalInterface {
  @Input()
  data: File;

  @Input()
  config: {
    aspectRatio: number;
    width: number;
    height: number;
    format: OutputFormat;
  };

  @Output()
  submitForm = new EventEmitter<File>();

  @Output()
  submitConfirmationForm?: EventEmitter<any>;

  @Output()
  closeModal: EventEmitter<any>;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.blob;
  }
}
