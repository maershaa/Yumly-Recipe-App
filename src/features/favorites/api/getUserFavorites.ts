import { supabase } from '@/supabase/supabaseClient';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

import type { Recipe } from '@/types';

interface FetchFavoritesRecipesParams {
  currentUserId: string;
  currentPage: number;
  tag?: string; // фильтр по тегу
  searchQuery?: string; // фильтр по названию
}

interface FetchFavoritesRecipesResponse {
  recipes: Recipe[];
  totalRecipesQty: number;
}

export const getUserFavorites = async ({
  currentUserId,
  currentPage,
  tag,
  searchQuery,
}: FetchFavoritesRecipesParams): Promise<FetchFavoritesRecipesResponse> => {
  const from = (currentPage - 1) * RECIPES_PER_PAGE;
  const to = from + (RECIPES_PER_PAGE - 1);

  let query = supabase.from('recipes').select(
    `*,
    favorites!inner(*)
  `,
    { count: 'exact' },
  );

  if (tag && tag !== 'all') {
    query = query.contains('tags', [tag]);
  }

  if (searchQuery?.trim()) {
    query = query.ilike('recipe_name', `%${searchQuery}%`);
  }

  const { data, count, error } = await query
    .eq('favorites.user_id', currentUserId)
    .order('created_at', { ascending: false }) // Новые рецепты идут первыми.
    .range(from, to);

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  const recipes = data.map((row) => mapToRecipe(row));
  const result = { recipes, totalRecipesQty: count ?? 0 };
  return result;
};

// Запрашиваем рецепты из таблицы "recipes".
// favorites!inner выполняет INNER JOIN с таблицей "favorites"
// и возвращает только те рецепты, для которых существует связанная запись.
// Фильтр favorites.user_id === currentUserId оставляет только избранные рецепты текущего авторизованного пользователя.
