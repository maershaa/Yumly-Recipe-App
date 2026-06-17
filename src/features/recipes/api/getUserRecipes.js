import { supabase } from '../../../../supabaseClient';

export const getUserRecipes = async (currentUserId) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*') //забираем все поля рецепта
      .eq('user_id', currentUserId); //фильтруем строки, где user_id строго равен currentUserId

    if (error) throw error;

    console.log('🚀 ~ getUserRecipes ~ data:', data);

    return data;
  } catch (error) {
    console.error('Error get user recipes:', error.message);
    throw error;
  }
};
