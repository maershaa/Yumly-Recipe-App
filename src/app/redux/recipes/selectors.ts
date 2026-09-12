import type { RootState } from '@/app/redux/store';

export const selectRecipes = (state: RootState) => state.recipes.items;
export const selectTotalRecipesQty = (state: RootState) =>
  state.recipes.totalRecipesQty;
export const selectLoading = (state: RootState) => state.recipes.loading;
