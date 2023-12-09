import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { HttpEnvironmentInterceptorService } from './interceptors/http-environment-interceptor.service';
import { PublicAppComponent } from './components/public-app/public-app.component';
import { PrivateAppComponent } from './components/private-app/private-app.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LanguageSwitchComponent, PublicAppComponent, PrivateAppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpEnvironmentInterceptorService,
      multi: true,
    },
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
