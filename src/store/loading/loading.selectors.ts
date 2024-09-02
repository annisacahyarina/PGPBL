// src/store/loading/loading.selectors.ts

import { createSelector } from '@ngrx/store';
import { AppState } from '../AppState';

export const selectLoadingState = createSelector(
  (state: AppState) => state.loading,
  (loadingState) => loadingState
);
