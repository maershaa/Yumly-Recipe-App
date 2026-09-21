import { supabase } from '@/supabase/supabaseClient';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import type { Recipe, MainTagsValue } from '@/types';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

type FetchUserRecipesParams = {
  currentUserId: string;
  currentPage: number;
  tag?: MainTagsValue; // фильтр по тегу
  searchQuery?: string; // фильтр по названию
};

type ReturnUserRecipesParams = {
  recipes: Recipe[];
  totalRecipesQty: number;
};

export const getUserRecipes = async ({
  currentUserId,
  searchQuery,
  tag,
  currentPage,
}: FetchUserRecipesParams): Promise<ReturnUserRecipesParams> => {
  const from = (currentPage - 1) * RECIPES_PER_PAGE;
  const to = from + (RECIPES_PER_PAGE - 1);

  let query = supabase.from('recipes').select('*', { count: 'exact' }); // Создаём базовый запрос на получение рецептов.

  // Фильтр по тегу.
  if (tag && tag !== 'all') {
    query = query.contains('tags', [tag]);
  }

  // Фильтр по названию рецепта.
  if (searchQuery?.trim()) {
    query = query.ilike('recipe_name', `%${searchQuery}%`);
  }

  query = query
    .eq('user_id', currentUserId) // Показываем только рецепты текущего пользователя
    .order('created_at', { ascending: false }) // Новые рецепты идут первыми
    .range(from, to);

  const { data, count, error } = await query;

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  const recipes = data.map((recipe) => mapToRecipe(recipe)); // так как тут data — массив то каждую строку прогоняем через mapToRecipe отдельно
  const result = { recipes, totalRecipesQty: count ?? 0 };
  return result;
};
