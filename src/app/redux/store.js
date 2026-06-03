import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';
import authReducer from './auth/authSlice';
import tagsReducer from './tags/tagsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,

    recipes: recipesReducer,
    tags: tagsReducer,
  },
});
