import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent {
  @Input()
  data: Snippet;

  @Input()
  view = SnippetView.LEFT;

  SnippetView = SnippetView;
}

export type Snippet = {
  title: string;
  text: string[] | string;
  images: string[];
};

export enum SnippetView {
  LEFT,
  RIGHT,
}
