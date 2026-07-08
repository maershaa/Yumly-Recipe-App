import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,

    recipes: recipesReducer,
  },
});
