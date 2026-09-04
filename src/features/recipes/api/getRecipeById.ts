import { supabase } from '@/supabase/supabaseClient';
import { mapToRecipe } from '@/features/recipes/utils';
import { getErrorMessage } from '@/utils';
import type { Recipe } from '@/types';

export const getRecipeById = async (recipeId: string): Promise<Recipe> => {
  const { data, error } = await supabase
    .from('recipes')
    .select(
      `*, 
   favorites (
   user_id    )
  `,
    )
    .eq('id', recipeId) //фильтруем строки, где id строго равен recipeId
    .single(); //ожидаю ровно одну запись, не массив

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  // Отдельно считаем общее количество лайков
  const { count, error: countError } = await supabase
    .from('favorites')
    .select('*', { count: 'exact', head: true }) //Посчитай точное количество строк, подходящих под запрос, но сами строки не возвращай
    .eq('recipe_id', recipeId);

  if (countError) {
    throw new Error(getErrorMessage(countError));
  }

  return mapToRecipe({ ...data, likes: count });
};

// Обьяснение
//

/* .select(
        `*,       //? Забираем все поля рецепта
   favorites (    //? Из связанной таблицы favorites берем только user_id и теперь доступ к нему будет через recipes.favorites
   user_id    )
  `,
      ) */
