import { configureStore } from '@reduxjs/toolkit';
import flats from './flats/reducer';
import houses from './houses/reducer';
import exclusives from './exclusives/reducer';
import user from './user/reducer';

export const store = configureStore({
  reducer: { flats, houses, exclusives, user },
  preloadedState: {},
});
