import { supabase } from '../../../../supabaseClient';

export const getUserRecipes = async (currentUserId) => {
  try {
    const { data, error } = await supabase
      .from('recippes')
      .select('*') //забираем все поля рецепта
      .eq('user_id', currentUserId);

    if (error) throw error;

    console.log('🚀 ~ getUserRecipes ~ data:', data);

    return data;
  } catch (error) {
    console.error('Error get user recipes:', error.message);
    throw error;
  }
};
