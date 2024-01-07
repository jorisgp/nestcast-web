import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  Contact,
  ContactConfirmation,
  WaitingList,
  WaitingListConfirmation,
} from 'src/app/shared/interfaces/auth.interface';
import { LanguageService } from './language.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class NestcastHttpService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private languageService: LanguageService
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

  putUsersConfirmation(confirmationCode?: number): Observable<any> {
    let params;
    if (confirmationCode) {
      params = this._createParams({ confirmationCode: confirmationCode });
    }

    return this.http
      .put<any>(
        `${apiPrefix}/${ApiResource.USERS}/${ApiResource.CONFIRMATION}`,
        {},
        { params }
      )
      .pipe(catchError((error) => this._handleError(error)));
  }

  postUsers(body: any): Observable<any> {
    return this.http
      .post<any>(`${apiPrefix}/${ApiResource.USERS}`, {
        ...body,
        language: this.languageService.getLanguage(),
      })
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchUsers(userId: string, body: any): Observable<any> {
    return this.http
      .patch<any>(`${apiPrefix}/${ApiResource.USERS}/${userId}`, body)
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchUsersConfirmation(confirmationCode: number, body: any): Observable<any> {
    const params = this._createParams({ confirmationCode: confirmationCode });
    return this.http
      .patch<any>(
        `${apiPrefix}/${ApiResource.USERS}/${ApiResource.CONFIRMATION}`,
        body,
        { params }
      )
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

  putShowsImage(showId: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .put<any>(
        `${apiPrefix}/${ApiResource.SHOWS}/${showId}/${ApiResource.IMAGES}`,
        formData,
        {
          reportProgress: true,
          responseType: 'json',
        }
      )
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

  getEpisodesById(episodeId: string): Observable<any> {
    return this.http
      .get<any>(`${apiPrefix}/${ApiResource.EPISODES}/${episodeId}`)
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

  putEpisodesImage(episodeId: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .put<any>(
        `${apiPrefix}/${ApiResource.EPISODES}/${episodeId}/${ApiResource.IMAGES}`,
        formData,
        {
          reportProgress: true,
          responseType: 'json',
        }
      )
      .pipe(catchError((error) => this._handleError(error)));
  }

  putEpisodesAudio(episodeId: string, file: File): Observable<any> {
    console.log('episodeId', episodeId);
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .put<any>(
        `${apiPrefix}/${ApiResource.EPISODES}/${episodeId}/${ApiResource.AUDIO}`,
        formData,
        {
          reportProgress: true,
          responseType: 'json',
        }
      )
      .pipe(catchError((error) => this._handleError(error)));
  }

  postWaitingList(body: WaitingList): Observable<any> {
    return this.http
      .post<any>(`${apiPrefix}/${ApiResource.WAITING_LISTS}`, {
        ...body,
        language: this.languageService.getLanguage(),
      })
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchWaitingList(
    id: string,
    confirmationCode: number,
    body: WaitingListConfirmation
  ): Observable<any> {
    const params = this._createParams({ confirmationCode: confirmationCode });
    return this.http
      .patch<any>(`${apiPrefix}/${ApiResource.WAITING_LISTS}/${id}`, body, {
        params,
      })
      .pipe(catchError((error) => this._handleError(error)));
  }

  postContact(body: Contact): Observable<any> {
    return this.http
      .post<any>(`${apiPrefix}/${ApiResource.CONTACTS}`, {
        ...body,
        language: this.languageService.getLanguage(),
      })
      .pipe(catchError((error) => this._handleError(error)));
  }

  patchContact(
    id: string,
    confirmationCode: number,
    body: ContactConfirmation
  ): Observable<any> {
    const params = this._createParams({ confirmationCode: confirmationCode });
    return this.http
      .patch<any>(`${apiPrefix}/${ApiResource.CONTACTS}/${id}`, body, {
        params,
      })
      .pipe(catchError((error) => this._handleError(error)));
  }

  private _createParams(keyValuePairs: { [key: string]: any }): HttpParams {
    let httpParams = new HttpParams();
    if (keyValuePairs) {
      httpParams = new HttpParams({ fromObject: keyValuePairs });
    }
    return httpParams;
  }

  private _handleError(errorResponse: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${errorResponse.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${errorResponse.status}: ${errorResponse.message}`;

      if (errorResponse.status === HttpStatusCode.BadRequest) {
        this._handleBadRequest(errorResponse);
      } else if (errorResponse.status === HttpStatusCode.InternalServerError) {
      } else if (errorResponse.status === HttpStatusCode.Unauthorized) {
      } else {
      }
    }
    return throwError(() => errorResponse);
  }

  private _handleBadRequest(err: any) {
    try {
      const errorMessageObject = JSON.parse(err.error.message);
      Object.keys(errorMessageObject)
        .map((key) => errorMessageObject[key])
        .forEach((items) =>
          this.notificationService.showWarn({
            title: 'Ongeldige handeling',
            text: items.map((item: string) => '- ' + item + '\n'),
          })
        );
    } catch (catchedError) {
      this.notificationService.showWarn({
        title: 'Ongeldige handeling',
        text: err.error.message,
      });
    }
  }
}

const apiPrefix = 'api';

enum ApiResource {
  AUTH = 'auth',
  USERS = 'users',
  PASSWORD = 'password',
  SHOWS = 'shows',
  IMAGES = 'images',
  EPISODES = 'episodes',
  WAITING_LISTS = 'waiting-lists',
  CONTACTS = 'contacts',
  CONFIRMATION = 'confirmation',
  AUDIO = 'audio',
}

export interface Upload {
  progress: number;
  state: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}
