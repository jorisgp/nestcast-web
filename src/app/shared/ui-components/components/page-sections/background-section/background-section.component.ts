import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.scss'],
})
export class BackgroundSectionComponent {
  @Input()
  gradient: Gradient;

  Gradient = Gradient;
  changeBackground = false;
}

export enum Gradient {
  ONE,
  TWO,
  THREE,
  FOUR,
}
