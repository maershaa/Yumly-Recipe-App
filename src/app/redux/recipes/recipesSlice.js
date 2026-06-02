import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes, fetchTags } from './operations';

const initialState = {
  items: [],
  tags: [],
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
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      //! fetchTags
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      });
  },
});

export default recipesSlice.reducer;
