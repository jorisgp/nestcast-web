import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LocalStorageService,
  StorageKey,
} from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpEnvironmentInterceptorService {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getItem(StorageKey.AUTH_TOKEN);
    const isLoggedIn = token;

    if (isLoggedIn) {
      request = request.clone({
        url: `${environment.apiUrl}/${request.url}`,
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    } else {
      request = request.clone({
        url: `${environment.apiUrl}/${request.url}`,
      });
    }

    return next.handle(request);
  }
}
