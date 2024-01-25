import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { IconButtonColor } from 'src/app/shared/ui-components/components/icon-button/icon-button.component';
import {
  IconSize,
  IconType,
} from '../../../../ui-components/components/icon/icon.component';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';

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

  @Output()
  delete = new EventEmitter<void>();

  @ViewChild('fileUpload')
  fileInput: ElementRef;

  ImageUploadButtonSize = ImageUploadButtonSize;
  IconButtonColor = IconButtonColor;
  IconType = IconType;
  IconSize = IconSize;

  constructor(private modalService: ModalService) {}

  onFileDragged(fileArray: File[]) {
    this._openEditModal(fileArray[0]);
  }

  onFileSelected(event: any) {
    const inputFileList = event.target.files;
    const fileArray = Array.prototype.slice.call(inputFileList);
    this.fileInput.nativeElement.value = '';
    this._openEditModal(fileArray[0]);
  }

  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }

  clickFileUpload(event: Event) {
    this.fileUpload.nativeElement.click();
    event.stopPropagation();
  }
  private _openEditModal(file: File) {
    this.modalService.openModal(
      ImageCropperComponent,
      (croppedFile) => this._uploadFile(croppedFile),
      null,
      file,
      {
        aspectRatio: 1,
        width: 1400,
        height: 1400,
        format: 'png',
      }
    );
  }

  private _uploadFile(file: File) {
    this.upload.emit(file);
  }
}

export enum ImageUploadButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}
