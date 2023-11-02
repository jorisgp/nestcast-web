import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/interfaces/auth.interface';
import { ModalInterface } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements ModalInterface {
  @Input()
  data: any;

  @Output()
  submitForm = new EventEmitter<Contact>();

  @Output()
  closeModal = new EventEmitter<void>();

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    agreeContactTerms: new FormControl(false, Validators.requiredTrue),
  });

  onSubmitForm() {
    if (this.contactForm.valid) {
      this.submitForm.emit(this.contactForm.value as Contact);
    }
  }
}
