import { useNavigate } from 'react-router-dom';
import {
  RecipeItem,
  Title,
  RecipeInfo,
  TagList,
} from './RecipeItemCard.styled';
import { useEffect } from 'react';

// calories:null
// cooking_time:70
// created_at:"2026-06-01T09:41:06.360344+00:00"
// cuisine:null
// difficulty:"hard"
// id:119
// image_url:"[https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc](https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc)"
// ingredients:(2)[{…},{…}]
// instructions:"["Prepare custard", "Bake", "Caramelize sugar"]"
// likes:224
// recipe_name:"Creme Brulee"
// tags:(2)['dessert','french']
// updated_at:null
// user_id: "bebbcbe2-5b78-416f-ac1d-dbfad7aa07f1"

const RecipeItemCard = ({ recipe }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(`Карточка ${recipe.id} была перерисована!`);
  });
  const {
    id,
    recipe_name,
    image_url,
    // user_id,
    // created_at,
    tags,
    cooking_time,
    // ingredients,
    // instructions,
  } = recipe;

  const onItemClick = (itemId) => {
    navigate(`recipes:${itemId}`);
  };

  if (!recipe) return;

  return (
    <RecipeItem onClick={() => onItemClick(id)}>
      <img src={image_url} alt={recipe_name} loading="lazy" />
      <Title>{recipe_name}</Title>
      <RecipeInfo>
        <span>Prep: {cooking_time}m </span>

        <TagList>
          {tags?.map((tag) => (
            <li key={tag}>
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
