import { supabase } from '../../../supabase/supabaseClient';

export const useUpdateRecipe = () => {
  const updateRecipe = async (updatedRecipe, currentUserId, recipeId) => {
    const { data, error } = await supabase
      .from('recipes')
      .update(updatedRecipe)
      .eq('id', recipeId) //обновляем конкретный рецепт
      .eq('user_id', currentUserId) // защита, что рецепт конкретного пользователя
      .select() //возвращает обновлённую строку
      .single(); //гарантирует объект, а не массив

    if (error) {
      console.error('Error updating recipe:', error.message);
      throw error;
    }

    return data;
  };

  return updateRecipe;
};
