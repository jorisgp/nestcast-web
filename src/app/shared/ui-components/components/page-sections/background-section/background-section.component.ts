import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  hidePrivateHeaderBackground,
  showPrivateHeaderBackground,
} from 'src/app/core/store/actions/ui.actions';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.scss'],
})
export class BackgroundSectionComponent {
  @Input()
  view = BackgroundSectionView.DEFAULT;

  @Input()
  headerAdjustment = true;

  @Input()
  gradient: Gradient;

  @Input()
  scroll = false;

  Gradient = Gradient;
  BackgroundSectionView = BackgroundSectionView;

  constructor(private store: Store<{ ui: any }>) {}

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    if (scrollTop > 100) {
      this.store.dispatch(showPrivateHeaderBackground());
    } else {
      this.store.dispatch(hidePrivateHeaderBackground());
    }
  }
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
