import { configureStore } from '@reduxjs/toolkit';
import flats from './flats/reducer';

export const store = configureStore({
  reducer: { flats },
  preloadedState: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
