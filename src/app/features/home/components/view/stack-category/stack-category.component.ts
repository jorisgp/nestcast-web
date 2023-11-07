import { Component, Input } from '@angular/core';
import { StackItem } from '../stack-item/stack-item.component';

@Component({
  selector: 'app-stack-category',
  templateUrl: './stack-category.component.html',
  styleUrls: ['./stack-category.component.scss'],
})
export class StackCategoryComponent {
  @Input()
  data: StackCategory;
}

export type StackCategory = {
  title: string;
  text: string;
  items: StackItem[];
};
