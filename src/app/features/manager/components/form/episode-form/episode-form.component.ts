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
      publicationDate: new FormControl(
        this.dateOrNowString(data?.publicationDate),
        []
      ),
      publicationTime: new FormControl(
        this.dateOrNowTime(data?.publicationDate) || new Date()
      ),
      audioFile: new FormControl(),
    });
  }

  onAudioSelect(file: File) {
    this.form.patchValue({ audioFile: file });
  }

  onSubmitForm() {
    const publicationDate = this._combineDateAndTime(
      this.form.value.publicationDate,
      this.form.value.publicationTime
    );
    if (this.form.valid) {
      this.submitForm.emit({
        ...this.form.value,
        id: this.data.id,
        publicationDate,
        publicationTime: undefined,
      });
    }
  }

  private _combineDateAndTime(dateString: string, timeString: string): Date {
    const date = new Date(dateString + ' ' + timeString);
    return date;
  }

  private dateOrNowTime(dateString: string): string {
    const date = new Date(dateString);
    return this._createTimeString(date || new Date());
  }
  private dateOrNowString(dateString: string): string {
    const date = new Date(dateString);
    return this._createDateString(date || new Date());
  }

  private _createDateString(date: Date): string {
    return (
      date.getFullYear() +
      '-' +
      this._addZero(date.getMonth() + 1) +
      '-' +
      this._addZero(date.getDate())
    );
  }

  private _createTimeString(date: Date): string {
    return (
      this._addZero(date.getHours() + 1) +
      ':' +
      this._addZero(date.getMinutes())
    );
  }

  private _addZero(number: number): string {
    return number < 10 ? '0' + number : number.toString();
  }
}
