import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WaitingList } from 'src/app/shared/interfaces/auth.interface';
import { ModalInterface } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-waiting-list-form',
  templateUrl: './waiting-list-form.component.html',
  styleUrls: ['./waiting-list-form.component.scss'],
})
export class WaitingListFormComponent implements ModalInterface {
  @Input()
  data: any;

  @Output()
  submitForm = new EventEmitter<WaitingList>();

  @Output()
  closeModal = new EventEmitter<void>();

  waitingListForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    agreeTerms: new FormControl(false, Validators.requiredTrue),
    agreeContactTerms: new FormControl(false, Validators.requiredTrue),
  });

  onSubmitForm() {
    if (this.waitingListForm.valid) {
      this.submitForm.emit(this.waitingListForm.value as WaitingList);
      // this.closeModal.emit();
    }
  }
}
