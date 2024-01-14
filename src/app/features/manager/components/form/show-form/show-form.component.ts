import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Show } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss'],
})
export class ShowFormComponent implements OnInit, OnChanges {
  @Input()
  data: Show;

  @Output()
  submitForm = new EventEmitter<Show>();

  form: FormGroup;

  ngOnInit() {
    this.createForm(this.data);
    this.form.controls['category'].valueChanges.subscribe(() => {
      this.form.controls['subCategory'].setValue('');
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createForm(changes['data'].currentValue);
  }

  createForm(data: Show) {
    this.form = new FormGroup({
      title: new FormControl(data?.title, [Validators.required]),
      description: new FormControl(data?.description, [Validators.required]),
      author: new FormControl(data?.author, [Validators.required]),
      email: new FormControl(data?.email, [Validators.email]),
      copyright: new FormControl(data?.copyright, []),
      language: new FormControl(data?.language || '', [
        Validators.minLength(2),
        Validators.required,
      ]),
      category: new FormControl(data?.category || '', [Validators.required]),
      subCategory: new FormControl(data?.subCategory || '', []),
      keywords: new FormControl(data?.keywords || [], []),
      explicit: new FormControl(data?.explicit || false, [Validators.required]),
    });
  }

  onSubmitForm() {
    if (this.form.valid) {
      console.log('form is valid');
      this.submitForm.emit({ id: this.data?.id, ...this.form.value });
    }
  }
}
