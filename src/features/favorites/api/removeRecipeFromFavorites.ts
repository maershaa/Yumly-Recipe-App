import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/utils';

export const removeRecipeFromFavorites = async (
  recipeIdToDelete: number,
  currentUserId: string,
): Promise<void> => {
  const { data, error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', currentUserId)
    .eq('recipe_id', recipeIdToDelete);
  // .select(); не нужен так как мы ничего не возвращаем

  if (error) {
    throw new Error(getErrorMessage(error));
  }
  // return data;
  //не нужен так как мы ничего не возвращаем
};
