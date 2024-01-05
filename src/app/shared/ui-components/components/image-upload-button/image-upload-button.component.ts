import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconSize, IconType } from '../icon/icon.component';

@Component({
  selector: 'app-image-upload-button',
  templateUrl: './image-upload-button.component.html',
  styleUrls: ['./image-upload-button.component.scss'],
})
export class ImageUploadButtonComponent {
  @Input()
  data: any;

  @Input()
  size: ImageUploadButtonSize;

  @Output()
  upload = new EventEmitter<void>();

  ImageUploadButtonSize = ImageUploadButtonSize;
  IconType = IconType;
  IconSize = IconSize;
}

export enum ImageUploadButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}
