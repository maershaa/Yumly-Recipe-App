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
    if (error) throw error;

    // Отдельно считаем общее количество лайков
    const { count, error: countError } = await supabase
      .from('favorites')
      .select('*', { count: 'exact', head: true }) //Посчитай точное количество строк, подходящих под запрос, но сами строки не возвращай
      .eq('recipe_id', recipeId);
    if (countError) throw countError;

    // Заменяем поле likes актуальным количеством лайков
    data.likes = count;

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
