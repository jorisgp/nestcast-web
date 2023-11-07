import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import * as effects from './core/store/effects';
import * as reducers from './core/store/reducers';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    TranslateModule.forRoot({
      defaultLanguage: 'nl',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      effects.UserEffects,
      effects.WaitingListEffects,
      effects.AuthEffects,
      effects.ContactEffects,
      effects.WaitingListConfirmationEffects,
      effects.ContactConfirmationEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
