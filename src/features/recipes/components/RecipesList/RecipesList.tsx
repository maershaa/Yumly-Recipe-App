import { RecipeItemCard } from '@/features/recipes/components';
import { RecipesListWrapper } from './RecipesList.styled';
import { useMemo } from 'react';

import type { Recipe } from '@/types';

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: RecipesListProps) => {
  const filteredRecipes = useMemo(() => {
    return recipes.filter(
      //проверка на дубликаты. по имени так как id совпадают кое где в БД
      (recipe, index, arr) =>
        arr.findIndex((r) => r.recipe_name === recipe.recipe_name) === index,
    );
  }, [recipes]);

  return (
    <RecipesListWrapper>
      {filteredRecipes.map((recipe) => {
        return <RecipeItemCard key={recipe.id} recipe={recipe} />;
      })}
    </RecipesListWrapper>
  );
};

export { RecipesList };
