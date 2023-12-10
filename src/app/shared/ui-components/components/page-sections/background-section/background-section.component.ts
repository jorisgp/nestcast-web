import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.scss'],
})
export class BackgroundSectionComponent {
  @Input()
  view = BackgroundSectionView.DEFAULT;

  @Input()
  headerAdjustment = false;

  @Input()
  gradient: Gradient;

  Gradient = Gradient;
  BackgroundSectionView = BackgroundSectionView;
}

export enum Gradient {
  ONE,
  TWO,
  THREE,
  FOUR,
  MANAGER_ONE,
}

export enum BackgroundSectionView {
  DEFAULT,
  FULL_SCREEN,
}
