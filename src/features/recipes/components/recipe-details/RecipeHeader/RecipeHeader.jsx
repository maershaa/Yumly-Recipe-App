import { Header } from './RecipeHeader.styled';

import { ImageSection, SummarySection } from '@/features/recipes/components';

const RecipeHeader = ({ recipe, setRecipe }) => {
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

  return (
    <Header>
      <ImageSection
        id={id}
        servings={servings}
        likes={likes}
        recipe_name={recipe_name}
        cooking_time={cooking_time}
        image_url={image_url}
        favorites={favorites}
        setRecipe={setRecipe}
      />

      <SummarySection
        id={id}
        user_id={user_id}
        recipe_name={recipe_name}
        cooking_time={cooking_time}
        description={description}
        tags={tags}
      />
    </Header>
  );
};

export { RecipeHeader };
