import { Header } from './RecipeHeader.styled';
import { ImageSection, SummarySection } from '@/features/recipes/components';
import { convertMinutes } from '@/features/recipes/helpers';
import type { Recipe } from '@/types';

interface RecipeHeaderProps {
  recipe: Recipe;
  setRecipe: () => void;
}

const RecipeHeader = ({ recipe, setRecipe }: RecipeHeaderProps) => {
  console.log('🚀 ~ RecipeHeader ~ recipe:', recipe);
  const {
    user_id,
    id,
    recipe_name,
    description,
    // cuisine,
    // difficulty,
    servings,
    likes,
    // tips,
    image_url,
    cooking_time,
    tags = [],
    favorites = [],
    // ingredients = [],
    // instructions,
  } = recipe;

  const displayCookingTime = Number(convertMinutes(cooking_time));

  return (
    <Header>
      <ImageSection
        id={id}
        servings={servings}
        likes={likes}
        recipe_name={recipe_name}
        cooking_time={displayCookingTime}
        image_url={image_url}
        favorites={favorites}
        setRecipe={setRecipe}
      />

      <SummarySection
        id={id}
        user_id={user_id}
        recipe_name={recipe_name}
        cooking_time={displayCookingTime}
        description={description}
        tags={tags}
      />
    </Header>
  );
};

export { RecipeHeader };
