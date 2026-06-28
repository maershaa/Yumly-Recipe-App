import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase/supabaseClient';

const fetchRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (_, thunkApi) => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .order('image_url', {
          //отсортируй строки по колонке image_url
          nullsFirst: false, //NULL значения ставь НЕ в начало, а в конец
        });
      //.range(0, 30); //ограничивает результат 30-ю элементами

      if (error) {
        return thunkApi.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export { fetchRecipes };
