import { DOCUMENT, Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Country, Language } from 'src/app/shared/model/models';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private countrySubject: BehaviorSubject<Country> =
    new BehaviorSubject<Country>(null);
  public country$ = this.countrySubject.asObservable();
  private country: Country;
  private countries = countries;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private translateService: TranslateService,
    private location: Location,
    private meta: Meta,
    private titleService: Title,
    private plaformService: PlatformService
  ) {}

  setInitialCountry() {
    this.country = this.countries.find((country: Country) => country.default);

    if (this.plaformService.isBrowser) {
      const navigatorLanguages = navigator?.languages;

      for (const languageString of navigatorLanguages) {
        const language = languageString.substring(0, 2);
        const countryCode = languageString.substring(3, 5);
        const matchedCountry = this._findCountry(language, countryCode);

        if (matchedCountry) {
          this.country = matchedCountry;
          break;
        }
      }
    }
    this.changeLanguage();
  }

  setInitialCountryByLanguage(language: string) {
    const matchedCountry = this._findCountry(language);
    if (matchedCountry) {
      this.country = matchedCountry;
    }
    this.changeLanguage();
  }

  setCountry(country: Country) {
    this.country = country;
    this.changeLanguage();
  }

  getTranslation(key: string): string {
    return this.translateService.instant(key);
  }

  getCountries(): Country[] {
    return this.countries;
  }

  getCountry(): Country {
    return this.country;
  }

  getLanguage(): string {
    return this.country.language;
  }

  private changeLanguage(): boolean {
    const country = this.country;
    if (country) {
      this.translateService.use(country.language).forEach?.(() => {
        this.document.documentElement.lang = country.language;
        this.titleService.setTitle(this.getTranslation('TITLE'));
        this.meta.updateTag({
          name: 'description',
          content: this.getTranslation('DESCRIPTION'),
        });
        this.meta.updateTag({
          name: 'keywords',
          content: this.getTranslation('KEYWORDS'),
        });
      });
      this.location.go(this._replaceLanguageInUrl(country.language));

      this.countrySubject.next(country);

      return true;
    }
    return false;
  }

  private _findCountry(language: string, countryCode?: string): Country {
    let country;
    if (countryCode) {
      country = this._findCountryByLanguageAndCode(language, countryCode);
    }
    if (!country) {
      country = this._findCountryByLanguage(language);
    }
    return country;
  }

  private _findCountryByLanguage(language: string): Country {
    return this.countries.find(
      (country: Country) => country.language === language
    );
  }

  private _findCountryByLanguageAndCode(
    language: string,
    countryCode: string
  ): Country {
    return this.countries.find(
      (country: Country) =>
        country.language === language && country.code === countryCode
    );
  }

  private _replaceLanguageInUrl(language: string): string {
    const path = this.location.path();
    const hasCountryCode = this.countries.some((country: Country) =>
      path.startsWith(`/${country.language}`)
    );

    if (hasCountryCode) {
      return path.replace(/\/[a-z]{2}/, `/${language}`);
    }
    return path;
  }
}

const countries = [
  { name: 'Nederland', code: 'NL', language: Language.NL },
  { name: 'UK', code: 'UK', language: Language.EN, default: true },
  { name: 'United States', code: 'US', language: Language.EN },
];
