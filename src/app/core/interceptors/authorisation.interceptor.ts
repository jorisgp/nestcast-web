import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { signOut } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthorisationInterceptor implements HttpInterceptor {
  constructor(private store: Store<{ auth: any }>) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request);
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401 || event.status === 403) {
            this.store.dispatch(signOut({ payload: null }));
          }
        }
      })
    );
  }
}
