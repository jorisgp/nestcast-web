import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NestCastHttpService {
  constructor(private http: HttpClient) {}

  postAuth(user: any): Observable<any> {
    return this.http.post(`${apiURL}/${ApiResource.AUTH}/login`, user);
  }

  getUserMe(): Observable<any> {
    return this.http.get(`${apiURL}/${ApiResource.USER}/me`);
  }
}

const apiURL = '/api/v1';

enum ApiResource {
  AUTH = 'auth',
  USER = 'user',
}
