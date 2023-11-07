import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.scss'],
})
export class ParagraphsComponent implements OnInit {
  @Input()
  data: string[] | string;

  ngOnInit() {
    if (!Array.isArray(this.data)) {
      this.data = [this.data];
    }
  }
}
