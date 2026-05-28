import { configureStore } from '@reduxjs/toolkit';
// import { recipesApi } from './recipesApi';
import recipesReducer from './recipesSlice';

export const store = configureStore({
  reducer: {
    // [recipesApi.reducerPath]: recipesApi.reducer,
    recipes: recipesReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(recipesApi.middleware),
});
