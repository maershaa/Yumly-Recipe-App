import { supabase } from '@/supabase/supabaseClient';

export const addRecipeToFavorites = async (recipeId, currentUserId) => {
  try {
    const { data, error } = await supabase
      .from('favorites')
      .insert({ user_id: currentUserId, recipe_id: recipeId });
    // .select(); не нужен так как мы ничего не возвращаем

    if (error) throw error;
    return data;
  } catch (e) {
    console.error('Error adding recipe to favorites:', e.message);
    throw e;
  }
};
