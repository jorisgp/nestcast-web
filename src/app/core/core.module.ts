import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpEnvironmentInterceptorService } from './interceptors/http-environment-interceptor.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpEnvironmentInterceptorService,
      multi: true,
    },
  ],
  imports: [BrowserModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
