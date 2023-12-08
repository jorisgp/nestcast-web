import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.component.html',
  styleUrls: ['./code-confirmation.component.scss'],
})
export class CodeConfirmationComponent {
  code: string = '    ';

  @ViewChild('button')
  button: ElementRef;

  @Input()
  title: string;

  @Input()
  text: string[] | string;

  @Input()
  linkText: string;

  @Output()
  submitForm = new EventEmitter<number>();

  @Output()
  cancelBack = new EventEmitter<void>();

  @Output()
  linkClick = new EventEmitter<void>();

  get cancelEnabled(): boolean {
    return this.cancelBack.observed;
  }

  get linkEnabled(): boolean {
    return this.linkClick.observed;
  }

  onKeyPress(event: any, index: number) {
    event.preventDefault();
    const key = event.key;
    const codeArray = this.code.split('');
    if (Number.isInteger(+key)) {
      codeArray[index] = key;
      this.code = codeArray.join('');
      this._elementForward(event);
      if (index === 3) {
        this.button.nativeElement.focus();
      }
    } else if (key === 'Backspace') {
      codeArray[index] = '';
      this.code = codeArray.join('');
      this._elementBack(event);
    } else if (key === 'ArrowLeft') {
      this._elementBack(event);
    } else if (key === 'ArrowRight') {
      this._elementForward(event);
    }
  }

  onKeyDown(event: any) {
    if (event.key !== 'Meta' && event.key !== 'v') {
      event.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent, index: number) {
    event.preventDefault();
    let data = event.clipboardData.getData('text/plain');
    this.code = this.code.substring(0, index) + data.substring(0, 4 - index);
    this.button?.nativeElement.focus();
  }

  onSubmit() {
    this.submitForm.emit(+this.code);
  }

  private _elementForward(event: any) {
    const element = event.srcElement.nextElementSibling;
    this._focus(element);
  }

  private _elementBack(event: any) {
    const element = event.srcElement.previousElementSibling;
    this._focus(element);
  }

  private _focus(element: any) {
    if (element) {
      element.focus();
      element.select();
    }
  }
}
