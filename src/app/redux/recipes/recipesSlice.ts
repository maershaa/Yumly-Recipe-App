import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes } from './operations';
import type { Recipe } from '@/types';

interface initialState {
  items: Recipe[];
  totalCount: number;
  loading: boolean;
  error: null | string;
}

const initialState: initialState = {
  items: [],
  totalCount: 0,
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
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.totalCount = action.payload.length;
      });
  },
});

export default recipesSlice.reducer;
