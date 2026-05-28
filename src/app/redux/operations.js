import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { supabase } from '../../../supabaseClient';

// const BaseUrl = 'https://65e95c314bb72f0a9c513d32.mockapi.io/recipes';

const fetchRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (_, thunkApi) => {
    try {
      // const response = await axios.get(BaseUrl);
      const response = await supabase.from('recipes').select();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export { fetchRecipes };
