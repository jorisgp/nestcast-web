import { Component } from '@angular/core';
import { Gradient } from '../../view/background-section/background-section.component';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-about-page-container',
  templateUrl: './about-page-container.component.html',
  styleUrls: ['./about-page-container.component.scss'],
})
export class AboutPageContainerComponent {
  SnippetView = SnippetView;
  Gradient = Gradient;
}
