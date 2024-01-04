import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss'],
})
export class CategorySelectComponent {
  @Input()
  nameFormControl: string;

  @Input()
  form: FormGroup;

  categroryList = Object.values(Category);
}

enum Category {
  ARTS = 'Arts',
  BUSINESS = 'Business',
  COMEDY = 'Comedy',
  EDUCATION = 'Education',
  FICTION = 'Fiction',
  GOVERNMENT = 'Government',
  HISTORY = 'History',
  HEALTH_FITNESS = 'Health & Fitness',
  KIDS_FAMILY = 'Kids & Family',
  LEISURE = 'Leisure',
  MUSIC = 'Music',
  NEWS = 'News',
  RELIGION_SPIRITUALITY = 'Religion & Spirituality',
  SCIENCE = 'Science',
  SOCIETY_CULTURE = 'Society & Culture',
  SPORTS = 'Sports',
  TECHNOLOGY = 'Technology',
  TRUE_CRIME = 'True Crime',
  FILM_TV = 'TV & Film',
}
