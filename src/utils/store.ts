import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../features/character';
import filterReducer from '../features/filters';
import historyReducer from '../features/history';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    filters: filterReducer,
    history: historyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
