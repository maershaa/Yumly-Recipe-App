import { supabase } from '@/supabase/supabaseClient';

const getUserInfo = async (id: string) => {
  const {
    data: likes,
    count: totalUserRecipes,
    error,
  } = await supabase
    .from('recipes')
    .select(`likes`, { count: 'exact' })
    .eq('user_id', id);

  // const { count, error } = await supabase
  //   .from('characters')
  //   .select('*', { count: 'exact', head: true });

  const { count: favoriteRecipesQty, error: favoriteRecipesError } =
    await supabase
      .from('favorites')
      .select(`*`, { count: 'exact' })
      .eq('user_id', id);

  return { likes, totalUserRecipes, favoriteRecipesQty };
};

export { getUserInfo };
