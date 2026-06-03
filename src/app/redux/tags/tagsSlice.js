import { createSlice } from '@reduxjs/toolkit';
import { fetchTags } from './operations';

const initialState = {
  items: [],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchTags.pending, (state) => {})
      // .addCase(fetchTags.rejected, (state, action) => {})
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default tagsSlice.reducer;
