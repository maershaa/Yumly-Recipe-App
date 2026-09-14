import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/supabase/supabaseClient';
import type { Recipe } from '@/types';
import { getErrorMessage } from '@/utils';
import { mapToRecipe } from '@/features/recipes/utils';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

interface FetchRecipesParams {
  currentPage: number;
  tag?: string; // фильтр по тегу
  searchQuery?: string; // фильтр по названию
}

interface FetchRecipesResponse {
  recipes: Recipe[];
  totalRecipesQty: number;
}

const fetchRecipes = createAsyncThunk<
  FetchRecipesResponse, //то что функция вовращает
  FetchRecipesParams, //аргументы функции
  { rejectValue: string } //обработка ошибки
>('recipes/getRecipes', async ({ currentPage, tag, searchQuery }, thunkApi) => {
  const from = (currentPage - 1) * RECIPES_PER_PAGE;
  const to = from + RECIPES_PER_PAGE - 1;

  let query = supabase.from('recipes').select('*', { count: 'exact' });

  if (tag && tag !== 'all') {
    //Conditional Chaining filters
    query = query.contains('tags', [tag]);
  }

  if (searchQuery?.trim()) {
    query = query.ilike('recipe_name', `%${searchQuery}%`);
  }

  query = query
    .order('created_at', { ascending: false }) // Новые рецепты идут первыми.
    //.order('likes', { ascending: false }) // сортировка рецептов от большего количества лайков к меньшему. Убрала потому что при каждой подргузке при нажатии на кнопку Load more происходит перемена всех рецептов местами
    .range(from, to); //ограничивает результат

  const { data, count, error } = await query;

  if (error) {
    return thunkApi.rejectWithValue(getErrorMessage(error));
  }

  const recipes = data.map((recipe) => mapToRecipe(recipe));
  const result = { recipes, totalRecipesQty: count ?? 0 };
  return result;
});

export { fetchRecipes };
