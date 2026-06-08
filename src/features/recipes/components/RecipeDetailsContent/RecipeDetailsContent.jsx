import { Wrapper } from './RecipeDetailsContent.styled';

const RecipeDetailsContent = ({ recipe }) => {
  const {
    recipe_name,
    image_url,
    cooking_time,
    tags = [],
    ingredients = [],
    instructions,
  } = recipe;
  return (
    <Wrapper>
      <div className="imgWrapper">
        <img src={image_url} alt={recipe_name} loading="lazy" />
      </div>

      <div className="contentWrapper">
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
      </div>
    </Wrapper>
  );
};

export { RecipeDetailsContent };
