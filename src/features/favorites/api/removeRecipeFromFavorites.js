import { supabase } from '@/supabase/supabaseClient';

export const removeRecipeFromFavorites = async (
  recipeIdToDelete,
  currentUserId,
) => {
  try {
    const { data, error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', currentUserId)
      .eq('recipe_id', recipeIdToDelete);
    // .select(); не нужен так как мы ничего не возвращаем

    if (error) throw error;
    return data;
  } catch (e) {
    console.error('Error during deleted recipe from favorites:', e.message);
    throw e;
  }
};
