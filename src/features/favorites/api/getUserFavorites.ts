import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage, mapToRecipe } from '@/features/recipes/utils';
import type { Recipe } from '@/types';

export const getUserFavorites = async (
  currentUserId: string,
): Promise<Recipe[]> => {
  const { data, error } = await supabase
    .from('recipes')
    .select(
      `
            *,
    favorites!inner()
  `,
    )
    .eq('favorites.user_id', currentUserId);

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  return data.map((row) => mapToRecipe(row));
};

// Запрашиваем рецепты из таблицы "recipes".
// favorites!inner выполняет INNER JOIN с таблицей "favorites"
// и возвращает только те рецепты, для которых существует связанная запись.
// Фильтр favorites.user_id === currentUserId оставляет только избранные рецепты текущего авторизованного пользователя.
