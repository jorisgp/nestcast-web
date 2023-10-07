import { Component } from '@angular/core';
import { Gradient } from '../../view/background-section/background-section.component';

@Component({
  selector: 'app-contact-page-container',
  templateUrl: './contact-page-container.component.html',
  styleUrls: ['./contact-page-container.component.scss'],
})
export class ContactPageContainerComponent {
  Gradient = Gradient;
}
