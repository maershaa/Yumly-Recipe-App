import { configureStore } from '@reduxjs/toolkit';
// import { recipesApi } from './recipesApi';
import recipesReducer from './recipes/recipesSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    // [recipesApi.reducerPath]: recipesApi.reducer,
    recipes: recipesReducer,
    auth: authReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(recipesApi.middleware),
});
