import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes } from './operations';

import type { Recipe } from '@/types';

interface RecipesState {
  items: Recipe[];
  totalRecipesQty: number;
  loading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  items: [],
  totalRecipesQty: 0,
  loading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;

        const currentPage = action.meta.arg.currentPage;

        // заменяем предыдущие рецепты.
        if (currentPage === 1) {
          state.items = action.payload.recipes;
        } else {
          //добавляем новые рецепты к уже загруженным.
          state.items.push(...action.payload.recipes);
          // state.totalRecipesQty = action.payload.totalRecipesQty;
        }

        state.totalRecipesQty = action.payload.totalRecipesQty;
      });
  },
});

export default recipesSlice.reducer;
