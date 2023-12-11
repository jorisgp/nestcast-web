import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NestcastHttpService } from '../../services/nestcast-http.service';
import {
  createShow,
  createShowError,
  createShowSuccess,
} from '../actions/show.actions';

@Injectable()
export class ShowEffects {
  constructor(
    private actions$: Actions,
    private nestcastHttpService: NestcastHttpService
  ) {}

  createShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createShow),
      mergeMap((action) =>
        this.nestcastHttpService.postShows(action.payload).pipe(
          map((show) => createShowSuccess({ payload: show })),
          catchError((error) => of(createShowError(error)))
        )
      )
    )
  );
}
