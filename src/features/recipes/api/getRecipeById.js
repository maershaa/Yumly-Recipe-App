import { supabase } from '../../../supabase/supabaseClient';

export const getRecipeById = async (recipeId) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*') //забираем все поля рецепта
      .eq('id', recipeId) //фильтруем строки, где id строго равен recipeId
      .single(); //ожидаю ровно одну запись, не массив

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error get recipe details:', error.message);
    throw error;
  }
};
