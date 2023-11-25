import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as express from 'express';

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {
  private readonly DEFAULT_PORT: number = null;
  private readonly PORT = process.env['PORT'] || this.DEFAULT_PORT;

  constructor(@Inject(REQUEST) private request: express.Request) {}

  getBaseUrl(req: express.Request) {
    const { protocol, hostname } = req;
    return this.PORT
      ? `${protocol}://${hostname}:${this.PORT}`
      : `${protocol}://${hostname}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.startsWith('./assets')) {
      const baseUrl = this.getBaseUrl(this.request);
      console.debug('TranslateInterceptor: baseUrl', baseUrl);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets', 'assets')}`,
      });
    }

    console.log();
    return next.handle(request);
  }
}
