import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
  },
});

export default recipesSlice.reducer;
