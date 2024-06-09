// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import vegetarianDishReducer from '../features/vegetarianDishSlice'

export const store = configureStore({
  reducer: {
    vegetarianDish: vegetarianDishReducer 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
