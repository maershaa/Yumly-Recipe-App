import { RecipeItemCard } from '@/features/recipes/components';
import { RecipesListWrapper } from './RecipesList.styled';
const RecipesList = ({ recipes }) => {
  return (
    <RecipesListWrapper>
      {recipes.map((recipe) => {
        return <RecipeItemCard key={recipe.id} recipe={recipe} />;
      })}
    </RecipesListWrapper>
  );
};

export { RecipesList };
