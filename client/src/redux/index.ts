import { configureStore } from '@reduxjs/toolkit';
import flats from './flats/reducer';
import houses from './houses/reducer';

export const store = configureStore({
  reducer: { flats, houses },
  preloadedState: {},
});
