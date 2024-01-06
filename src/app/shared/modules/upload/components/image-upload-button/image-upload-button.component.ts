import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  IconSize,
  IconType,
} from '../../../../ui-components/components/icon/icon.component';

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
  upload = new EventEmitter<File>();

  @ViewChild('fileUpload')
  fileInput: ElementRef;

  ImageUploadButtonSize = ImageUploadButtonSize;
  IconType = IconType;
  IconSize = IconSize;

  onFileDragged(fileArray: File[]) {
    this._handleFile(fileArray[0]);
  }

  onFileSelected(event: any) {
    const inputFileList = event.target.files;
    const fileArray = Array.prototype.slice.call(inputFileList);
    this.fileInput.nativeElement.value = '';
    this._handleFile(fileArray[0]);
  }

  private _handleFile(file: File) {
    this.upload.emit(file);
  }
}

export enum ImageUploadButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}
