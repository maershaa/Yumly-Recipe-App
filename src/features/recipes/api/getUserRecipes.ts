import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage, mapToRecipe } from '@/features/recipes/utils';
import type { Recipe } from '@/types';

export const getUserRecipes = async (
  currentUserId: string,
): Promise<Recipe[]> => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*') //забираем все поля рецепта
    .eq('user_id', currentUserId); //фильтруем строки, где user_id строго равен currentUserId

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  return data.map((row) => mapToRecipe(row)); // так как тут data — массив то каждую строку прогоняем через mapToRecipe отдельно
};
