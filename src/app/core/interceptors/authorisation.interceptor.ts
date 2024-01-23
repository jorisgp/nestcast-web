import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { signOut } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthorisationInterceptor implements HttpInterceptor {
  constructor(private store: Store<{ auth: any }>) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    console.debug('handleAuthError', err);
    if (err.status === 401 || err.status === 403) {
      console.debug('handled error ' + err.status);
      this.store.dispatch(signOut());
      return EMPTY;
    }
    return throwError(err);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // // Clone the request to add the new header.
    // const authReq = req.clone({
    //   headers: req.headers.set(Cookie.tokenKey, Cookie.getToken()),
    // });
    // // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
    return next.handle(req).pipe(catchError((x) => this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
  }
}
