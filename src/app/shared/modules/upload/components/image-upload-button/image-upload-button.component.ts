import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IconButtonColor } from 'src/app/shared/ui-components/components/icon-button/icon-button.component';
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
  @ViewChild('fileUpload') fileUpload: ElementRef;

  @Input()
  data: string;

  @Input()
  disableDelete: boolean = false;

  @Input()
  size: ImageUploadButtonSize;

  @Output()
  upload = new EventEmitter<File>();

  @ViewChild('fileUpload')
  fileInput: ElementRef;

  ImageUploadButtonSize = ImageUploadButtonSize;
  IconButtonColor = IconButtonColor;
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

  onDelete(event: Event) {
    event.stopPropagation();
  }

  clickFileUpload(event: Event) {
    this.fileUpload.nativeElement.click();
    event.stopPropagation();
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
