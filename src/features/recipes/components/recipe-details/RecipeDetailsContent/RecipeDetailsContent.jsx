import {
  RecipeDetailsWrapper,
  // RecipeDetails,
} from './RecipeDetailsContent.styled';
import { RecipeHeader, MainContent } from '@/features/recipes/components';
// import { AiOutlineClockCircle } from 'react-icons/ai';
// import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const RecipeDetailsContent = ({ recipe, setRecipe }) => {
  const {
    // recipe_name,
    // description,
    // cuisine,
    // difficulty,
    // servings,
    // likes,
    tips,
    // image_url,
    // cooking_time,
    // tags = [],
    ingredients = [],
    instructions,
  } = recipe;

  return (
    <RecipeDetailsWrapper>
      <RecipeHeader recipe={recipe} setRecipe={setRecipe} />

      <MainContent
        tips={tips}
        ingredients={ingredients}
        instructions={instructions}
      />
    </RecipeDetailsWrapper>
  );
};

export { RecipeDetailsContent };
