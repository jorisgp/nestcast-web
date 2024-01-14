import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-episode-type-select',
  templateUrl: './episode-type-select.component.html',
  styleUrls: ['./episode-type-select.component.scss'],
})
export class EpisodeTypeSelectComponent {
  @Input()
  nameFormControl: string;

  @Input()
  form: FormGroup;

  episodeTypeList = Object.values(EpisodeType);
}

enum EpisodeType {
  FULL = 'Full',
  TRAILER = 'Trailer',
  BONUS = 'Bonus',
}
