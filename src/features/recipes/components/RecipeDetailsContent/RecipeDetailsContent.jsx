import {
  Wrapper,
  ImgWrapper,
  ContentWrapper,
} from './RecipeDetailsContent.styled';
import { noImgPlaceholder } from '@/assets/images';

const RecipeDetailsContent = ({ recipe }) => {
  const {
    recipe_name,
    image_url,
    cooking_time,
    tags = [],
    ingredients = [],
    instructions,
  } = recipe;

  const recipeImage = image_url ? image_url : noImgPlaceholder;

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={recipeImage} alt={recipe_name} loading="lazy" />
      </ImgWrapper>

      <ContentWrapper>
        <h2>{recipe_name}</h2>

        {cooking_time && <span>Prep time: {cooking_time} min</span>}

        <ul>
          {tags?.map((tag) => (
            <li key={tag}>
              <span>{tag.toUpperCase()}</span>
            </li>
          ))}
        </ul>

        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <span>
                {ingredient.name} — {ingredient.amount}
              </span>
            </li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ul>
          {instructions.map((step, index) => (
            <li key={index}>{`${index + 1}. ${step}`}</li>
          ))}
        </ul>
      </ContentWrapper>
    </Wrapper>
  );
};

export { RecipeDetailsContent };
