import { createAction } from '@ngrx/store';

const TYPE = '[UI]';

export const showPrivateHeaderBackground = createAction(
  `${TYPE} Show Private Header Background`
);

export const hidePrivateHeaderBackground = createAction(
  `${TYPE} Hide Private Header Background`
);
