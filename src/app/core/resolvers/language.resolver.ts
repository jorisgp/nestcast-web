import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LanguageService } from '../services/language.service';

export const languageResolver: ResolveFn<boolean> = (route, state) => {
  const languageService = inject(LanguageService);
  const language = route.paramMap.get('lang')!;
  languageService.setInitialCountryByLanguage(language);
  return true;
};
