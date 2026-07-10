import { supabase } from '@/supabase/supabaseClient';

export const getUserFavorites = async (currentUserId) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select(
        `
            *,
    favorites!inner()
  `,
      )
      .eq('favorites.user_id', currentUserId);

    if (error) throw error;

    return data;
  } catch (e) {
    console.error('Error loading favorites:', e.message);
    throw e;
  }
};

// Запрашиваем рецепты из таблицы "recipes".
// favorites!inner выполняет INNER JOIN с таблицей "favorites"
// и возвращает только те рецепты, для которых существует связанная запись.
// Фильтр favorites.user_id === currentUserId оставляет только избранные рецепты текущего авторизованного пользователя.
