import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunk),
});
