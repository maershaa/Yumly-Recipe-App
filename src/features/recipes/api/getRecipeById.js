import { supabase } from '@/supabase/supabaseClient';

export const getRecipeById = async (recipeId) => {
  try {
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
    console.log('🚀 ~ getRecipeById ~ data:', data);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error get recipe details:', error.message);
    throw error;
  }
};

// Обьяснение
//

/* .select(
        `*,       //! Забираем все поля рецепта
   favorites (    //! Из связанной таблицы favorites берем только user_id и теперь доступ к нему будет через recipes.favorites
   user_id    )
  `,
      ) */
