import { supabase } from '@/supabase/supabaseClient';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import type { Recipe } from '@/types';

type FetchUserRecipesParams = {
  //currentPage: number;
  //tag?: string; // фильтр по тегу
  currentUserId: string;
  searchQuery?: string; // фильтр по названию
};

export const getUserRecipes = async ({
  currentUserId,
  searchQuery,
}: FetchUserRecipesParams): Promise<Recipe[]> => {
  console.log('🚀 ~ getUserRecipes ~ searchQuery:', searchQuery);
  let query = supabase.from('recipes').select('*'); //забираем все поля рецепта;

  if (searchQuery?.trim()) {
    query = query.ilike('recipe_name', `%${searchQuery}%`);
  }

  query = query.eq('user_id', currentUserId); //фильтруем строки, где user_id строго равен currentUserId

  const { data, error } = await query;

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  return data.map((row) => mapToRecipe(row)); // так как тут data — массив то каждую строку прогоняем через mapToRecipe отдельно
};
