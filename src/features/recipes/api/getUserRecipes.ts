import { supabase } from '@/supabase/supabaseClient';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import type { Recipe, MainTagsValue } from '@/types';

type FetchUserRecipesParams = {
  currentUserId: string;
  //currentPage: number;
  tag?: MainTagsValue; // фильтр по тегу
  searchQuery?: string; // фильтр по названию
};

export const getUserRecipes = async ({
  currentUserId,
  searchQuery,
  tag,
}: FetchUserRecipesParams): Promise<Recipe[]> => {
  let query = supabase.from('recipes').select('*'); // Создаём базовый запрос на получение рецептов.

  // Если выбран конкретный тег, оставляем только рецепты, в массиве tags которых присутствует этот тег.
  if (tag && tag !== 'all') {
    query = query.contains('tags', [tag]);
  }

  // Если пользователь ввёл поисковый запрос, ищем совпадение в названии рецепта.
  if (searchQuery?.trim()) {
    query = query.ilike('recipe_name', `%${searchQuery}%`);
  }

  query = query.eq('user_id', currentUserId); // Показываем только рецепты текущего пользователя.

  const { data, error } = await query;

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  return data.map((row) => mapToRecipe(row)); // так как тут data — массив то каждую строку прогоняем через mapToRecipe отдельно
};
