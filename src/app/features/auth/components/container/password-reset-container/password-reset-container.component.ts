import { Component } from '@angular/core';
import { Gradient } from 'src/app/shared/ui-components/components/page-sections/background-section/background-section.component';

@Component({
  selector: 'app-password-reset-container',
  templateUrl: './password-reset-container.component.html',
  styleUrls: ['./password-reset-container.component.scss'],
})
export class PasswordResetContainerComponent {
  Gradient = Gradient;
}
