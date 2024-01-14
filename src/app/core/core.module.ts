import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DropdownModule } from 'primeng/dropdown';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { PrivateAppComponent } from './components/private-app/private-app.component';
import { PublicAppComponent } from './components/public-app/public-app.component';
import { AuthorisationInterceptor } from './interceptors/authorisation.interceptor';
import { HttpEnvironmentInterceptor } from './interceptors/http-environment.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LanguageSwitchComponent,
    PublicAppComponent,
    PrivateAppComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorisationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpEnvironmentInterceptor,
      multi: true,
    },
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'nl',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
