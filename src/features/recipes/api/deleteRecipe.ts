import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/features/recipes/utils';

export const deleteRecipe = async (
  recipeIdToDelete: number,
  currentUserId: string,
): Promise<void> => {
  const { data, error } = await supabase
    .from('recipes')
    .delete()
    .eq('user_id', currentUserId) //для этого настроена политика в самлй supabase но кто-то может изменить правила RLS внутри Supabase. Если пропсиать эту строку ваш код останется в безопасности и вы получите корректное сообщение об ошибке в своем коде — без него вы просто получите сообщение "Удалено 0 строк
    .eq('id', recipeIdToDelete)
    .select();

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  // Если ни одна строка не удалена — значит рецепт не найден или не принадлежит пользователю.
  // Без этой проверки функция "молча" завершится успешно, хотя ничего не произошло.
  if (!data || data.length === 0) {
    throw new Error(
      'Recipe not found or you do not have permission to delete it.',
    );
  }
};
