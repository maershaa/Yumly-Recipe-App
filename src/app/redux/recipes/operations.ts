import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase/supabaseClient';
import type { Recipe } from '@/types';
import { getErrorMessage } from '@/features/recipes/utils';

// ! тут Recipe[] это ошибка. надо разобраться. отвте приходит такой data: {
//   ingredients: Json | null;   // ← реальный тип, который вычислил TS
//   instructions: Json | null;
//   difficulty: string | null;
// ...остальные поля
// }[]
const fetchRecipes = createAsyncThunk<Recipe[], void, { rejectValue: string }>(
  'recipes/getRecipes',
  async (_, thunkApi) => {
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
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }

    return data;
  },
);

export { fetchRecipes };
