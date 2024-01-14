import { Component } from '@angular/core';
import {
  BackgroundSectionView,
  Gradient,
} from 'src/app/shared/ui-components/components/page-sections/background-section/background-section.component';

@Component({
  selector: 'app-manager-router-outlet',
  templateUrl: './manager-router-outlet.component.html',
  styleUrls: ['./manager-router-outlet.component.scss'],
})
export class ManagerRouterOutletComponent {
  Gradient = Gradient;
  BackgroundSectionView = BackgroundSectionView;
}
