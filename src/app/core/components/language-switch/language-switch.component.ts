import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Country, Language } from 'src/app/shared/model/models';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  countries: Country[];
  selectedCountry: Country;
  Language = Language;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    const language = navigator.language;

    this.switchLanguage(language as Language);

    this.countries = [
      { name: 'UK', code: 'UK', language: Language.EN },
      { name: 'Nederland', code: 'NL', language: Language.NL },
      { name: 'United States', code: 'US', language: Language.EN },
      { name: 'France', code: 'FR', language: Language.FR },
    ];
  }

  onLanguageChange(changeEvent: DropdownChangeEvent) {
    this.switchLanguage(changeEvent.value.language);
  }
  switchLanguage(language: Language): void {
    this.translateService.use(language);
    this.translateService.reloadLang(language);
  }
}
