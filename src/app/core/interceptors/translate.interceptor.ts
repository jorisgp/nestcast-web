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
  private readonly DEFAULT_PORT: number = null;
  private readonly PORT = process.env['PORT'] || this.DEFAULT_PORT;

  constructor(@Inject(REQUEST) private request: express.Request) {}

  getBaseUrl(req: express.Request) {
    const { protocol } = req;
    return this.PORT
      ? `${protocol}://${environment.host}:${this.PORT}`
      : `${protocol}://${environment.host}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.startsWith('./assets')) {
      const baseUrl = this.getBaseUrl(this.request);
      console.debug('TranslateInterceptor: baseUrl', baseUrl);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets', 'assets')}`,
      });
    }
    return next.handle(request);
  }
}
