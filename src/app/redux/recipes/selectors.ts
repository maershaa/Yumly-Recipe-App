import { RootState } from '@/app/redux/store';

export const selectRecipes = (state: RootState) => state.recipes.items;

export const selectLoading = (state: RootState) => state.recipes.loading;
