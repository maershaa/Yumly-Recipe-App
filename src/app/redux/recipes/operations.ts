import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase/supabaseClient';
import type { Recipe } from '@/types';

const fetchRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (_, thunkApi): Promise<Recipe[]> => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .order('image_url', {
          //отсортируй строки по колонке image_url
          nullsFirst: false, //NULL значения ставь НЕ в начало, а в конец
        });
      console.log('🚀 ~ error:', error);
      console.log('🚀 ~ data:', data);
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
