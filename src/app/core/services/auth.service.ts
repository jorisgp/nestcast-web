import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<string> {
    console.log('AuthService.login()', username);
    return of('tokenaskdjfh askjdfh askjdfhkajsdfhka');
  }
}
