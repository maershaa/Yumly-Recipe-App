import { supabase } from '../../../../supabaseClient';

export const deleteRecipe = async (recipeIdToDelete) => {
  console.log('🚀 ~ deleteRecipe ~ recipeIdToDelete:', recipeIdToDelete);
  try {
    const { data, error } = await supabase
      .from('recipes')
      .delete()
      //.eq('user_id', currentUserId) //!не нужно. для этого настроена политика в самлй supabase
      .eq('id', recipeIdToDelete)
      .single() //ожидаю ровно одну запись, не массив
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.log('Error during deleted recipe');
    throw error;
  }
};
