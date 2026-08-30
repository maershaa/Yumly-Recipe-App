import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/features/recipes/utils';

export const deleteRecipe = async (
  recipeIdToDelete: string,
  currentUserId: string,
) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .delete()
      .eq('user_id', currentUserId) //для этого настроена политика в самлй supabase но кто-то может изменить правила RLS внутри Supabase. Если пропсиать эту строку ваш код останется в безопасности и вы получите корректное сообщение об ошибке в своем коде — без него вы просто получите сообщение "Удалено 0 строк
      .eq('id', recipeIdToDelete)
      .select();

    if (error) throw error;
    console.log('🚀 ~ deleteRecipe ~ data:', data);
    return data;
  } catch (error) {
    console.error('Error during deleted recipe:', getErrorMessage(error));

    throw error;
  }
};
