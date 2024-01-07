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
} from 'src/app/shared/ui-components/components/icon/icon.component';

@Component({
  selector: 'app-audio-upload-button',
  templateUrl: './audio-upload-button.component.html',
  styleUrls: ['./audio-upload-button.component.scss'],
})
export class AudioUploadButtonComponent {
  @Input()
  audioSource: string;

  storedData: File;

  localAudioSource: string;

  @Input()
  size: ImageUploadButtonSize;

  @Output()
  select = new EventEmitter<File>();

  @ViewChild('fileUpload')
  fileInput: ElementRef;

  ImageUploadButtonSize = ImageUploadButtonSize;
  IconType = IconType;
  IconSize = IconSize;

  get audioSourceUrl() {
    return this.localAudioSource ? this.localAudioSource : this.audioSource;
  }

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
    this.storedData = file;
    const createdFile = new File([file], 'temp_audio.mp3');
    this.audioSource = URL.createObjectURL(createdFile);
    this.select.emit(file);
  }
}

export enum ImageUploadButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}
