import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/shared/model/models';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class RouterService extends Router {
  constructor(private languageService: LanguageService) {
    super();
  }

  override navigate(commands: any[], extras?: any): Promise<boolean> {
    let addRoot = false;
    if (commands[0] === '/') {
      if (commands.length === 1) {
        commands = [];
      } else if (commands.length > 1) {
        commands.shift();
        addRoot = true;
      }
    }

    const country: Country = this.languageService.getCountry();

    if (country) {
      commands.unshift(country.language);
      if (addRoot) {
        commands.unshift('/');
      }
    }
    return super.navigate(commands, extras);
  }
}
