import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as express from 'express';
import { environment } from '../../../environments/environment';

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {
  constructor(@Inject(REQUEST) private request: express.Request) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.startsWith('./assets')) {
      const baseUrl = environment.host;
      console.debug('TranslateInterceptor: baseUrl', baseUrl);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets', 'assets')}`,
      });
    }
    return next.handle(request);
  }
}
