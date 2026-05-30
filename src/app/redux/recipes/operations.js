import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../../supabaseClient';

// .select(*) - отдай все столбцы
// .select('recipe_name, ingredients' ) - отдай перечисленные столбцы

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
