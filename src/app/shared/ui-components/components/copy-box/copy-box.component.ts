import { Component, Input } from '@angular/core';
import { IconType } from '../icon/icon.component';

@Component({
  selector: 'app-copy-box',
  templateUrl: './copy-box.component.html',
  styleUrls: ['./copy-box.component.scss'],
})
export class CopyBoxComponent {
  @Input()
  data: string;

  IconType = IconType;
}
