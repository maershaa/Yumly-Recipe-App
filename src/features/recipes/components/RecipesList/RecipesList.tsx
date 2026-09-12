import { RecipeItemCard } from '@/features/recipes/components';
import { RecipesListWrapper } from './RecipesList.styled';

import type { Recipe } from '@/types';

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: RecipesListProps) => {
  return (
    <RecipesListWrapper>
      {recipes.map((recipe) => {
        return <RecipeItemCard key={recipe.id} recipe={recipe} />;
      })}
    </RecipesListWrapper>
  );
};

export { RecipesList };
