import {
  HttpClient,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class NestcastHttpService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  postAuthLogin(body: any): Observable<any> {
    return this.http
      .post<any>(`${apiPrefix}/${ApiResource.AUTH}/login`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getUsers(): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.USERS}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getUsersById(id: string): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.USERS}/${id}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getUsersMe(): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.USERS}/me`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  postUsers(body: any): Observable<any> {
    return this.http
      .post<any>(`${apiPrefix}/${ApiResource.USERS}`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchUsers(userId: string, body: any): Observable<any> {
    return this.http
      .patch<any>(`${apiPrefix}/${ApiResource.USERS}/${userId}`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  deleteUsers(userId: string): Observable<any> {
    return this.http
      .delete<any>(`${apiPrefix}/${ApiResource.USERS}/${userId}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  putUsersPassword(body: any): Observable<any> {
    return this.http
      .put<any>(`${apiPrefix}/${ApiResource.USERS}/password`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getShows(): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.SHOWS}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getShowsById(id: string): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.SHOWS}/${id}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getShowsMine(): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.SHOWS}/mine`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  postShows(body: any): Observable<any> {
    return this.http
      .post<any>(`${apiPrefix}/${ApiResource.SHOWS}`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchShows(showId: string, body: any): Observable<any> {
    return this.http
      .patch<any>(`${apiPrefix}/${ApiResource.SHOWS}/${showId}`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  deleteShows(showId: string): Observable<any> {
    return this.http
      .delete<any>(`${apiPrefix}/${ApiResource.SHOWS}/${showId}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  getShowsEpisodes(showId: string): Observable<any> {
    return this.http
      .get<any>(
        `${apiPrefix}/${ApiResource.SHOWS}/${showId}/${ApiResource.EPISODES}`
      )
      .pipe(catchError((error) => this._handleError(error)));
  }

  postShowsEpisodes(showId: string, body: any): Observable<any> {
    return this.http
      .post<any>(
        `${apiPrefix}/${ApiResource.SHOWS}/${showId}/${ApiResource.EPISODES}`,
        body
      )
      .pipe(catchError((error) => this._handleError(error)));
  }

  getEpisodes(): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.EPISODES}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchEpisodes(episodeId: string, body: any): Observable<any> {
    return this.http
      .patch<any>(`${apiPrefix}/${ApiResource.EPISODES}/${episodeId}`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  deleteEpisode(episodeId: string): Observable<any> {
    return this.http
      .delete<any>(`${apiPrefix}/${ApiResource.EPISODES}/${episodeId}`)
      .pipe(catchError((error) => this._handleError(error)));
  }

  private _handleError(errorResponse: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${errorResponse.error.message}`;
      this.notificationService.showError(
        'Er is een onverwachte lokale fout opgetreden',
        errorResponse.error.message
      );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${errorResponse.status}: ${errorResponse.message}`;

      if (errorResponse.status === HttpStatusCode.BadRequest) {
        this._handleBadRequest(errorResponse);
      } else if (errorResponse.status === HttpStatusCode.InternalServerError) {
        this.notificationService.showError(
          'Er is een onverwachte fout opgetreden',
          errorResponse.error?.message
        );
      } else if (errorResponse.status === HttpStatusCode.Unauthorized) {
        this.notificationService.showError(
          'Unauthorized',
          errorResponse.error?.message
        );
      } else {
        this.notificationService.showError(
          'Er is een fout opgetreden',
          errorResponse.error?.message
        );
      }
    }
    return throwError(() => errorMessage);
  }

  private _handleBadRequest(err: any) {
    try {
      const errorMessageObject = JSON.parse(err.error.message);
      Object.keys(errorMessageObject)
        .map((key) => errorMessageObject[key])
        .forEach((item) =>
          this.notificationService.showWarn('Ongeldige handeling', item)
        );
    } catch (catchedError) {
      this.notificationService.showWarn(
        'Ongeldige handeling',
        err.error.message
      );
    }
  }
}

const apiPrefix = 'api';

enum ApiResource {
  AUTH = 'auth',
  USERS = 'users',
  PASSWORD = 'password',
  SHOWS = 'shows',
  EPISODES = 'episodes',
}

export interface Upload {
  progress: number;
  state: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}
