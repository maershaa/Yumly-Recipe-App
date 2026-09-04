import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/utils';

export const addRecipeToFavorites = async (
  recipeId: number,
  currentUserId: string,
): Promise<void> => {
  const { error } = await supabase
    .from('favorites')
    .insert({ user_id: currentUserId, recipe_id: recipeId });
  // .select(); не нужен так как мы ничего не возвращаем

  if (error) throw new Error(getErrorMessage(error));

  // return mapToRecipe(data); // не нужен так как мы ничего не возвращаем?
};
