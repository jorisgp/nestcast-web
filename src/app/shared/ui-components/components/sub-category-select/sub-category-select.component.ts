import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-category-select',
  templateUrl: './sub-category-select.component.html',
  styleUrls: ['./sub-category-select.component.scss'],
})
export class SubCategorySelectComponent implements OnChanges {
  @Input()
  category: string = '';

  @Input()
  nameFormControl: string;

  @Input()
  form: FormGroup;

  subCategories: string[];

  ngOnChanges(changes: SimpleChanges): void {
    const category = changes['category'];
    if (category) {
      this.subCategories = this._getSubCategories(category.currentValue);
    }
  }

  private _getSubCategories(category: string): string[] {
    switch (category) {
      case 'Arts':
        return Object.values(SubCategoryArts);
      case 'Business':
        return Object.values(SubCategoryBusiness);
      case 'Comedy':
        return Object.values(SubCategoryComedy);
      case 'Education':
        return Object.values(SubCategoryEducation);
      case 'Fiction':
        return Object.values(SubCategoryFiction);
      case 'Government':
        return Object.values(SubCategoryGovernment);
      case 'History':
        return Object.values(SubCategoryHistory);
      case 'Health & Fitness':
        return Object.values(SubCategoryHealthFitness);
      case 'Kids & Family':
        return Object.values(SubCategoryKidsFamily);
      case 'Leisure':
        return Object.values(SubCategoryLeisure);
      case 'Music':
        return Object.values(SubCategoryMusic);
      case 'News':
        return Object.values(SubCategoryNews);
      case 'Religion & Spirituality':
        return Object.values(SubCategoryReligionSpirituality);
      case 'Science':
        return Object.values(SubCategoryScience);
      case 'Society & Culture':
        return Object.values(SubCategorySocietyCulture);
      case 'Sports':
        return Object.values(SubCategorySports);
      case 'Technology':
        return Object.values(SubCategoryTechnology);
      case 'True Crime':
        return Object.values(SubCategoryTrueCrime);
      case 'TV & Film':
        return Object.values(SubCategoryFilmTv);
      default:
        return [];
    }
  }
}

enum SubCategoryArts {
  BOOKS = 'Books',
  DESIGN = 'Design',
  FASHION_BEAUTY = 'Fashion & Beauty',
  FOOD = 'Food',
  PERFORMING_ARTS = 'Performing Arts',
  VISUAL_ARTS = 'Visual Arts',
}
enum SubCategoryBusiness {
  CAREERS = 'Careers',
  INVESTING = 'Investing',
  MANAGEMENT = 'Management',
  MARKETING = 'Marketing',
  NON_PROFIT = 'Non-Profit',
  ENTREPRENEURSHIP = 'Entrepreneurship',
  MANAGEMENT_MARKETING = 'Management & Marketing',
}
enum SubCategoryComedy {
  COMEDY_INTERVIEWS = 'Comedy Interviews',
  IMPROV = 'Improv',
  STANDUP = 'Standup',
}
enum SubCategoryEducation {
  COURSES = 'Courses',
  HOW_TO = 'How To',
  LANGUAGE_LEARNING = 'Language Learning',
  SELF_IMPROVEMENT = 'Self-Improvement',
}
enum SubCategoryFiction {
  COMEDY_FICTION = 'Comedy Fiction',
  DRAMA = 'Drama',
  SCIENCE_FICTION = 'Science Fiction',
  FICTION = 'Fiction',
  DRAMA_FICTION = 'Drama Fiction',
  SCIENCE_FICTION_FICTION = 'Science Fiction Fiction',
}
enum SubCategoryGovernment {}
enum SubCategoryHistory {}
enum SubCategoryHealthFitness {
  ALTERNATIVE_HEALTH = 'Alternative Health',
  FITNESS = 'Fitness',
  MEDICINE = 'Medicine',
  MENTAL_HEALTH = 'Mental Health',
  NUTRITION = 'Nutrition',
  SEXUALITY = 'Sexuality',
}
enum SubCategoryKidsFamily {
  EDUCATION_FOR_KIDS = 'Education for Kids',
  PARENTING = 'Parenting',
  PETS_ANIMALS = 'Pets & Animals',
  STORIES_FOR_KIDS = 'Stories for Kids',
}
enum SubCategoryLeisure {
  ANIMATION_MANGA = 'Animation & Manga',
  AUTOMOTIVE = 'Automotive',
  AVIATION = 'Aviation',
  CRAFTS = 'Crafts',
  GAMES = 'Games',
  HOBBIES = 'Hobbies',
  HOME_GARDEN = 'Home & Garden',
  VIDEO_GAMES = 'Video Games',
}
enum SubCategoryMusic {
  MUSIC_COMMENTARY = 'Music Commentary',
  MUSIC_HISTORY = 'Music History',
  MUSIC_INTERVIEWS = 'Music Interviews',
}
enum SubCategoryNews {
  BUSINESS_NEWS = 'Business News',
  DAILY_NEWS = 'Daily News',
  ENTERTAINMENT_NEWS = 'Entertainment News',
  NEWS_COMMENTARY = 'News Commentary',
  POLITICS = 'Politics',
  SPORTS_NEWS = 'Sports News',
  TECH_NEWS = 'Tech News',
  NEWS = 'News',
}
enum SubCategoryReligionSpirituality {
  BUDDHISM = 'Buddhism',
  CHRISTIANITY = 'Christianity',
  HINDUISM = 'Hinduism',
  ISLAM = 'Islam',
  JUDAISM = 'Judaism',
  RELIGION = 'Religion',
  SPIRITUALITY = 'Spirituality',
}
enum SubCategoryScience {
  ASTRONOMY = 'Astronomy',
  CHEMISTRY = 'Chemistry',
  EARTH_SCIENCES = 'Earth Sciences',
  LIFE_SCIENCES = 'Life Sciences',
  MATHEMATICS = 'Mathematics',
  NATURAL_SCIENCES = 'Natural Sciences',
  NATURE = 'Nature',
  PHYSICS = 'Physics',
  SOCIAL_SCIENCES = 'Social Sciences',
}
enum SubCategorySocietyCulture {
  DOCUMENTARY = 'Documentary',
  PERSONAL_JOURNALS = 'Personal Journals',
  PHILOSOPHY = 'Philosophy',
  PLACES_TRAVEL = 'Places & Travel',
  RELATIONSHIPS = 'Relationships',
}
enum SubCategorySports {
  BASEBALL = 'Baseball',
  BASKETBALL = 'Basketball',
  CRICKET = 'Cricket',
  FANTASY_SPORTS = 'Fantasy Sports',
  FOOTBALL = 'Football',
  GOLF = 'Golf',
  HOCKEY = 'Hockey',
  RUGBY = 'Rugby',
  RUNNING = 'Running',
  SOCCER = 'Soccer',
  SWIMMING = 'Swimming',
  TENNIS = 'Tennis',
  VOLLEYBALL = 'Volleyball',
  WILDERNESS = 'Wilderness',
  WRESTLING = 'Wrestling',
}
enum SubCategoryTechnology {}
enum SubCategoryTrueCrime {}
enum SubCategoryFilmTv {
  AFTER_SHOWS = 'After Shows',
  FILM_HISTORY = 'Film History',
  FILM_INTERVIEWS = 'Film Interviews',
  FILM_REVIEWS = 'Film Reviews',
  TV_REVIEWS = 'TV Reviews',
}
