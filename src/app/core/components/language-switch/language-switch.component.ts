import { Component } from '@angular/core';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { Country, Language } from 'src/app/shared/model/models';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  countries: Country[];
  Language = Language;
  selectedCountry: Country;
  countryObservable = this.languageService.country$;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.countries = this.languageService.getCountries();
    this.languageService.setInitialCountry();

    this.countryObservable.subscribe((country) => {
      this.selectedCountry = country;
    });
  }

  onLanguageChange(changeEvent: DropdownChangeEvent) {
    this.languageService.setInitialCountryByLanguage(
      changeEvent.value.language
    );
  }
}
