import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  WaitingListConfirm,
  WaitingListDetails,
} from '../../interfaces/auth.interface';
import { ModalInterface } from '../../services/modal.service';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.component.html',
  styleUrls: ['./code-confirmation.component.scss'],
})
export class CodeConfirmationComponent implements ModalInterface {
  @ViewChild('button') button: ElementRef;

  data: WaitingListDetails;
  config?: any;
  submitForm = new EventEmitter<WaitingListConfirm>();

  @Output()
  closeModal = new EventEmitter<void>();

  confirmationForm = new FormGroup({
    digits: new FormArray([
      new FormGroup({ digit: new FormControl('', Validators.required) }),
      new FormGroup({ digit: new FormControl('', Validators.required) }),
      new FormGroup({ digit: new FormControl('', Validators.required) }),
      new FormGroup({ digit: new FormControl('', Validators.required) }),
    ]),
  });

  onSubmit() {
    const value = this.confirmationForm.value.digits;
    console.log(
      'this.confirmationForm.value.digits',
      this.confirmationForm.value.digits
    );

    const code = value.map((input) => input.digit).toString();
    this.submitForm.emit({ id: this.data.id, code: code, active: true });
  }

  get digits() {
    return this.confirmationForm.controls['digits'] as FormArray<FormGroup>;
  }

  onKeyUp(event: KeyboardEvent) {
    event.preventDefault();
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    let data = event.clipboardData.getData('text/plain');
    this.setValue(data);
    this.button.nativeElement.focus();
  }

  setValue(value: string) {
    value = value.trim();
    value = value.substring(0, 4);

    if (Number.isInteger(+value)) {
      value
        .split('')
        .forEach((character, index) =>
          (this.digits.controls[index] as FormGroup).controls['digit'].setValue(
            character
          )
        );
    }
  }

  onKeyDown(event: any) {
    if (event.code !== 'Tab' && event.key !== 'Shift') {
      event.preventDefault();

      let element;
      const srcElement = event.srcElement;
      const key = event.key;

      if (event.code !== 'Backspace') {
        if (Number.isInteger(+key)) {
          srcElement.value = key;
          element = event.srcElement.nextElementSibling;
        }
      } else {
        srcElement.value = '';
        element = event.srcElement.previousElementSibling;
        if (!element) {
          return;
        }
      }

      if (srcElement && element == null) {
        this.button.nativeElement.focus();
        return;
      } else {
        element.focus();
        element.select();
      }
    }
  }
}
