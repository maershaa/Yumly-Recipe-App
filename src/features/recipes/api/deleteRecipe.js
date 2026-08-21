import { supabase } from '@/supabase/supabaseClient';

export const deleteRecipe = async (recipeIdToDelete, currentUserId) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .delete()
      .eq('user_id', currentUserId) //для этого настроена политика в самлй supabase но кто-то может изменить правила RLS внутри Supabase. Если пропсиать эту строку ваш код останется в безопасности и вы получите корректное сообщение об ошибке в своем коде — без него вы просто получите сообщение "Удалено 0 строк
      .eq('id', recipeIdToDelete)
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.log('Error during deleted recipe');
    throw error;
  }
};
