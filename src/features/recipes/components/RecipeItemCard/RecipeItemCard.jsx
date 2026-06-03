import { useNavigate } from 'react-router-dom';
import {
  RecipeItem,
  Title,
  RecipeInfo,
  TagList,
} from './RecipeItemCard.styled';

const RecipeItemCard = ({ recipe }) => {
  const navigate = useNavigate();

  const { id, recipe_name, image_url, tags, cooking_time } = recipe;

  const onItemClick = (itemId) => {
    navigate(`/recipes/${itemId}`);
  };

  if (!recipe) return;

  return (
    <RecipeItem onClick={() => onItemClick(id)}>
      <img src={image_url} alt={recipe_name} loading="lazy" />
      <Title>{recipe_name}</Title>
      <RecipeInfo>
        <span>Prep time: {cooking_time}m </span>

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
