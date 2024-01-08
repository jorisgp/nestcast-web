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

  @ViewChild('audioElement', { static: false }) public _audioRef: ElementRef;
  private audio: HTMLMediaElement;

  ImageUploadButtonSize = ImageUploadButtonSize;
  IconType = IconType;
  IconSize = IconSize;
  IconButtonColor = IconButtonColor;

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
    this.audioSource = null;
    this.storedData = file;
    const createdFile = new File(
      [file],
      `temp_audio_${new Date().getTime()}.mp3`
    );

    this.audioSource = URL.createObjectURL(createdFile);
    this.select.emit(file);
  }
}

export enum ImageUploadButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}
