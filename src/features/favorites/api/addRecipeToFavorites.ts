import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/utils';

export const addRecipeToFavorites = async (
  recipeId: number,
  currentUserId: string,
): Promise<void> => {
  // 1. Добавляем запись в таблицу favorites
  const { error } = await supabase
    .from('favorites')
    .insert({ user_id: currentUserId, recipe_id: recipeId });
  // .select(); не нужен так как мы ничего не возвращаем

  if (error) throw new Error(getErrorMessage(error));

  // 2. Узнаём текущее количество лайков этого рецепта
  const { data: currentRecipeLikesQty, error: likesQtyError } = await supabase
    .from('recipes')
    .select('likes')
    .eq('id', recipeId)
    .single();

  if (likesQtyError) throw new Error(getErrorMessage(likesQtyError));

  // 3. Обновляем количество лайков увеличивая на 1

  const { error: updateLikedQtyError } = await supabase
    .from('recipes')
    .update({ likes: (currentRecipeLikesQty.likes ?? 0) + 1 })
    .eq('id', recipeId);

  if (updateLikedQtyError)
    throw new Error(getErrorMessage(updateLikedQtyError));

  //return mapToRecipe(data); // не нужен так как мы ничего не возвращаем?
};
