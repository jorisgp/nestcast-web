import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { ModalService } from '../../services/modal.service';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import { NotificationService } from '../../services/notification.service';
import {
  createEpisode,
  createEpisodeAddAudio,
  createEpisodeAddAudioError,
  createEpisodeAddAudioSuccess,
  createEpisodeError,
  createEpisodeSuccess,
  fetchEpisode,
  fetchEpisodeError,
  fetchEpisodeList,
  fetchEpisodeListSuccess,
  fetchEpisodeSuccess,
  updateEpisode,
  uploadEpisodeImage,
  uploadEpisodeImageError,
  uploadEpisodeImageSuccess,
} from '../actions/episode.actions';

@Injectable()
export class EpisodeEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService,
    private notificationService: NotificationService,
    private languageService: LanguageService,
    private modalService: ModalService,
    private router: Router
  ) {}

  createEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEpisode),
      mergeMap((action) =>
        this.nestcastHttpService
          .postShowsEpisodes(action.showId, action.payload)
          .pipe(
            map((episode) => {
              if (action.audio) {
                console.log('returned episode', episode);
                return createEpisodeAddAudio({
                  payload: episode,
                  audio: action.audio,
                });
              } else {
                return createEpisodeSuccess(episode);
              }
            }),
            catchError((error) => of(createEpisodeError(error)))
          )
      )
    )
  );

  createEpisodeError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createEpisodeError),
        tap(() => {
          this.notificationService.showWarn(
            this.languageService.getTranslation('HOME.CONTACT.ERRORMESSAGE')
          );
          this.modalService.closeModal();
        })
      ),
    { dispatch: false }
  );

  createEpisodeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createEpisodeSuccess),
        tap(() => this.router.navigate(['/', 'secure', 'manager']))
      ),
    { dispatch: false }
  );

  fetchEpisodeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEpisodeList),
      mergeMap((action) =>
        this.nestcastHttpService.getShowsEpisodes(action.showId).pipe(
          map((result) => fetchEpisodeListSuccess({ payload: result })),
          catchError((error) => of(createEpisodeError(error)))
        )
      )
    )
  );

  fetchEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEpisode),
      mergeMap((action) => {
        return this.nestcastHttpService.getEpisodesById(action.episodeId).pipe(
          map((result) => fetchEpisodeSuccess({ payload: result })),
          catchError((error) => of(fetchEpisodeError(error)))
        );
      })
    )
  );

  fetchEpisodeSuccess$ = createEffect(
    () => this.actions$.pipe(ofType(fetchEpisodeSuccess)),
    { dispatch: false }
  );

  updateEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEpisode),
      mergeMap((action) =>
        this.nestcastHttpService
          .patchEpisodes(action.episodeId, action.payload)
          .pipe(
            map((episode) => createEpisodeSuccess(episode)),
            catchError((error) => of(createEpisodeError(error)))
          )
      )
    )
  );

  uploadEpisodeImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadEpisodeImage),
      mergeMap((action) =>
        this.nestcastHttpService
          .putEpisodesImage(action.episodeId, action.payload)
          .pipe(
            map((episode) => uploadEpisodeImageSuccess(episode)),
            catchError((error) => of(uploadEpisodeImageError(error)))
          )
      )
    )
  );

  // uploadEpisodeAudio$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(uploadEpisodeAudio),
  //     mergeMap((action) =>
  //       this.nestcastHttpService
  //         .putEpisodesAudio(action.episodeId, action.payload)
  //         .pipe(
  //           map((episode) => uploadEpisodeAudioSuccess(episode)),
  //           catchError((error) => of(uploadEpisodeAudioError(error)))
  //         )
  //     )
  //   )
  // );

  createEpisodeAddAudio$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEpisodeAddAudio),
      tap(console.log),
      mergeMap((action) =>
        this.nestcastHttpService
          .putEpisodesAudio(action.payload.id, action.audio)
          .pipe(
            map((episode) => createEpisodeAddAudioSuccess(episode)),
            catchError((error) => of(createEpisodeAddAudioError(error)))
          )
      )
    )
  );
}
