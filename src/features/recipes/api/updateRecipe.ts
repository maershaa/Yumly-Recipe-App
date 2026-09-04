import { supabase } from '@/supabase/supabaseClient';
import type { UpdateRecipePayload, Recipe } from '@/types';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import type { TablesUpdate } from '@/types/supabase';

export const updateRecipe = async (
  updatedRecipe: UpdateRecipePayload,
  currentUserId: string,
  recipeId: string,
): Promise<Recipe> => {
  const { data, error } = await supabase
    .from('recipes')
    .update(updatedRecipe as unknown as TablesUpdate<'recipes'>)
    .eq('id', recipeId) //обновляем конкретный рецепт
    .eq('user_id', currentUserId) // защита, что рецепт конкретного пользователя
    .select() //возвращает обновлённую строку
    .single(); //гарантирует объект, а не массив

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  return mapToRecipe(data);
};
