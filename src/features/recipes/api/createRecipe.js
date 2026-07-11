import { useCallback } from 'react';
import { supabase } from '@/supabase/supabaseClient';

export const useCreateRecipe = () => {
  const createRecipe = useCallback(async (newRecipe, currentUserId) => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .insert({ ...newRecipe, user_id: currentUserId })
        .select();

      if (error) throw error;
      return data;
    } catch (e) {
      console.error('Error creating recipe:', e.message);
      throw e;
    }
  }, []); // Если функция не зависит от внешних переменных (кроме аргументов), зависимости пустые

  return createRecipe;
};
