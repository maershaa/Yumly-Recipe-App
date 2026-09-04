import { supabase } from '@/supabase/supabaseClient';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import type { CreateRecipePayload, Recipe } from '@/types';
import { TablesInsert } from '@/types/supabase';

export const createRecipe = async (
  newRecipe: CreateRecipePayload,
  currentUserId: string,
): Promise<Recipe> => {
  const { data, error } = await supabase
    .from('recipes')
    .insert({
      ...newRecipe,
      user_id: currentUserId,
    } as unknown as TablesInsert<'recipes'>)
    .select()
    .single();

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  return mapToRecipe(data);
};
