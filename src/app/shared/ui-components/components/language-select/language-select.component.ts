import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Language } from 'src/app/shared/model/models';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent {
  @Input()
  nameFormControl: string;

  @Input()
  form: FormGroup;

  languages = languages;
}

const languages = [
  {
    code: Language.EN,
    name: 'English',
    flag: '🇬🇧',
  },
  {
    code: Language.DE,
    name: 'Deutsch',
    flag: '🇩🇪',
  },
  {
    code: Language.ES,
    name: 'Español',
    flag: '🇪🇸',
  },
  {
    code: Language.FR,
    name: 'Français',
    flag: '🇫🇷',
  },
  {
    code: Language.IT,
    name: 'Italiano',
    flag: '🇮🇹',
  },
  {
    code: Language.NL,
    name: 'Nederlands',
    flag: '🇳🇱',
  },
  {
    code: Language.PL,
    name: 'Polski',
    flag: '🇵🇱',
  },
  {
    code: Language.PT,
    name: 'Português',
    flag: '🇵🇹',
  },
  {
    code: Language.RU,
    name: 'Русский',
    flag: '🇷🇺',
  },
  {
    code: Language.TR,
    name: 'Türkçe',
    flag: '🇹🇷',
  },
  {
    code: Language.ZH,
    name: '中文',
    flag: '🇨🇳',
  },
];
