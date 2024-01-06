import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appDropFile]',
})
export class DropFileDirective implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @Output('appDropFile')
  fileDrop = new EventEmitter<any>();

  @Input()
  enableBodyDrop = false;

  @HostBinding('class.drop-file-active')
  active = false;

  loading = false;

  constructor() {}

  ngOnInit(): void {
    // this.attachmentService.uploading$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((value) => (this.loading = value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    console.log('onDrop');
    event.preventDefault();
    if (!this.enableBodyDrop) {
      this.handleDrop(event);
    }
  }

  handleDrop(event: DragEvent) {
    if (this.loading) {
      alert('Er is een file upload bezig, wacht tot deze klaar is...');
      return;
    }
    this.active = false;

    const fileList = event.dataTransfer.files;
    const files = Array.prototype.slice.call(fileList);
    this.onSave(files);
  }

  onSave(files: File[]) {
    this.fileDrop.emit(files);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.active = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    this.active = false;
  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    event.preventDefault();
    if (this.enableBodyDrop) {
      this.handleDrop(event);
    }
  }
}
