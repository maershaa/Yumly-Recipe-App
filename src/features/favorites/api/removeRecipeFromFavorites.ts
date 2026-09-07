import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/utils';

export const removeRecipeFromFavorites = async (
  recipeIdToDelete: number,
  currentUserId: string,
): Promise<void> => {
  // 1. Удаляем запись их таблици favorites
  const { data, error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', currentUserId)
    .eq('recipe_id', recipeIdToDelete);
  // .select(); не нужен так как мы ничего не возвращаем

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  // 2. Узнаём текущее количество лайков этого рецепта
  const { data: currentRecipeLikesQty, error: likesQtyError } = await supabase
    .from('recipes')
    .select('likes')
    .eq('id', recipeIdToDelete)
    .single();

  if (likesQtyError) throw new Error(getErrorMessage(likesQtyError));

  // 3. Уменьшаем на 1, но не опускаемся ниже нуля
  const { error: updateLikedQtyError } = await supabase
    .from('recipes')
    .update({ likes: Math.max((currentRecipeLikesQty.likes ?? 0) - 1, 0) }) //Math.max не дает счётчику стать отрицательным
    .eq('id', recipeIdToDelete);

  if (updateLikedQtyError)
    throw new Error(getErrorMessage(updateLikedQtyError));

  //return mapToRecipe(data); // не нужен так как мы ничего не возвращаем?
};
