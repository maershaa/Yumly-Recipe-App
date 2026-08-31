import { RecipeDetailsWrapper } from './RecipeDetailsContent.styled';
import { RecipeHeader, MainContent } from '@/features/recipes/components';
import type { Recipe } from '@/types';
import type { Dispatch, SetStateAction } from 'react';
interface RecipeDetailsContentProps {
  recipe: Recipe;
  setRecipe: Dispatch<SetStateAction<Recipe | null>>;
}

const RecipeDetailsContent = ({
  recipe,
  setRecipe,
}: RecipeDetailsContentProps) => {
  const { tips, ingredients, instructions } = recipe;

  return (
    <RecipeDetailsWrapper>
      <RecipeHeader recipe={recipe} setRecipe={setRecipe} />

      <MainContent
        tips={tips ?? ''}
        ingredients={ingredients ?? []}
        instructions={instructions ?? []}
      />
    </RecipeDetailsWrapper>
  );
};

export { RecipeDetailsContent };
