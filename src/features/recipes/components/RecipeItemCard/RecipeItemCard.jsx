import { useNavigate } from 'react-router-dom';
import { noImgPlaceholder } from '@/assets/images';
import {
  RecipeItem,
  Title,
  RecipeInfo,
  TagList,
} from './RecipeItemCard.styled';
import { convertMinutes } from '@/features/recipes/helpers';

const RecipeItemCard = ({ recipe }) => {
  const navigate = useNavigate();

  const { id, recipe_name, image_url, tags, cooking_time } = recipe;

  const onItemClick = (itemId) => {
    navigate(`/recipes/${itemId}`);
  };

  if (!recipe) return;

  const recipeImage = image_url ? image_url : noImgPlaceholder;
  const displayCookingTime = convertMinutes(cooking_time);

  return (
    <RecipeItem onClick={() => onItemClick(id)}>
      <img src={recipeImage} alt={recipe_name} loading="lazy" />
      <Title>{recipe_name}</Title>
      <RecipeInfo>
        <span>Prep time: {displayCookingTime} </span>

        <TagList>
          {tags?.map((tag) => (
            <li key={tag}>
              <span>{tag.toUpperCase()}</span>
            </li>
          ))}
        </TagList>
      </RecipeInfo>
    </RecipeItem>
  );
};

export { RecipeItemCard };
