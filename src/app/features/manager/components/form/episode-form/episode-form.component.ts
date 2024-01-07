import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Episode } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-episode-form',
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.scss'],
})
export class EpisodeFormComponent {
  @Input()
  data: Episode;

  @Output()
  submitForm = new EventEmitter<Episode>();

  form: FormGroup;

  ngOnInit() {
    this.createForm(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createForm(changes['data'].currentValue);
  }

  createForm(data: Episode) {
    this.form = new FormGroup({
      title: new FormControl(data?.title, [Validators.required]),
      description: new FormControl(data?.description, [Validators.required]),
      type: new FormControl(data?.type, [Validators.required]),
      season: new FormControl(data?.season, []),
      episode: new FormControl(data?.episode, []),
      keywords: new FormControl(data?.keywords || [], []),
      explicit: new FormControl(data?.explicit || false, [Validators.required]),
      audio: new FormControl(),
    });
  }

  onAudioSelect(file: File) {
    this.form.patchValue({ audio: file });
  }

  onSubmitForm() {
    if (this.form.valid) {
      this.submitForm.emit({ id: this.data.id, ...this.form.value });
    }
  }
}
