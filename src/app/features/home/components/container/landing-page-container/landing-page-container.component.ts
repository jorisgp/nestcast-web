import { Component } from '@angular/core';
import { SnippetView } from '../../view/snippet/snippet.component';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page-container.component.html',
  styleUrls: ['./landing-page-container.component.scss'],
})
export class LandingPageContainerComponent {
  SnippetView = SnippetView;
}
