import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase/supabaseClient';
import type { Recipe } from '@/types';
import { getErrorMessage } from '@/utils';
import { mapToRecipe } from '@/features/recipes/utils';

const fetchRecipes = createAsyncThunk<Recipe[], void, { rejectValue: string }>(
  'recipes/getRecipes',
  async (_, thunkApi) => {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .order('likes', { ascending: false }) // сортировка рецептов от большего количества лайков к меньшему
      .range(0, 10); //ограничивает результат 11-ю элементами

    if (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }

    return data.map((recipe) => mapToRecipe(recipe));
  },
);

export { fetchRecipes };
