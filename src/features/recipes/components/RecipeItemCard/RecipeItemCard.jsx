import {
  RecipeItem,
  Title,
  RecipeInfo,
  TagList,
} from './RecipeItemCard.styled';

const RecipeItemCard = ({ recipe }) => {
  const {
    // id,
    recipe_name,
    // user_id,
    // created_at,
    tags = ['easy', 'healthy'],
    cooking_time = 10,
    ingredients,
    instructions,
  } = recipe;

  if (!recipe) return;
  return (
    <RecipeItem>
      <img src="" alt="" />
      <Title>{recipe_name.toUpperCase()}</Title>

      <RecipeInfo>
        <span>Prep: {cooking_time}m </span>

        <TagList>
          {tags.map((tag) => (
            <li>
              <span>{tag.toUpperCase()}</span>
            </li>
          ))}
        </TagList>

        <p></p>
      </RecipeInfo>

      {/* <h3>Список ингредиентов:</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
      <h3>Cпособ приготовления:</h3>
      <p>{instructions}</p> */}
    </RecipeItem>
  );
};

export { RecipeItemCard };
