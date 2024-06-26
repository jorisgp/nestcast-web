import { Component } from '@angular/core';
import { Gradient } from '../../../../../shared/ui-components/components/page-sections/background-section/background-section.component';
import {
  CallToActionColor,
  CallToActionView,
} from '../../view/call-to-action/call-to-action.component';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-about-page-container',
  templateUrl: './about-page-container.component.html',
  styleUrls: ['./about-page-container.component.scss'],
})
export class AboutPageContainerComponent {
  SnippetView = SnippetView;
  Gradient = Gradient;
  CallToActionColor = CallToActionColor;
  CallToActionView = CallToActionView;
}
