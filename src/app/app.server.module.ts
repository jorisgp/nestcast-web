import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TranslateInterceptor } from './core/interceptors/translate.interceptor';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TranslateInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
