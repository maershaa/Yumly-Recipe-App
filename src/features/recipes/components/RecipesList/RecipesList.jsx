import { RecipeItemCard } from '@/features/recipes/components';
import { RecipesListWrapper } from './RecipesList.styled';
import { useMemo } from 'react';
const RecipesList = ({ recipes }) => {
  const filteredRecipes = useMemo(
    () => recipes.filter((recipe) => recipe.image_url !== null),
    [recipes],
  );
  return (
    <RecipesListWrapper>
      {filteredRecipes.map((recipe) => {
        return <RecipeItemCard key={recipe.id} recipe={recipe} />;
      })}
    </RecipesListWrapper>
  );
};

export { RecipesList };
