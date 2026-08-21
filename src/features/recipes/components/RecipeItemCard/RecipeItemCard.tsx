import { useNavigate } from 'react-router-dom';
import { noImgPlaceholder } from '@/assets/images';
import {
  RecipeItem,
  Title,
  RecipeInfo,
  TagList,
} from './RecipeItemCard.styled';
import { convertMinutes } from '@/features/recipes/helpers';

import type { Recipe } from '@/types';

type RecipeItemCardProps = { recipe: Recipe };

const RecipeItemCard = ({ recipe }: RecipeItemCardProps) => {
  const navigate = useNavigate();

  if (!recipe) return;

  const { id, recipe_name, image_url, tags, cooking_time } = recipe;

  const onItemClick = (itemId: number) => {
    navigate(`/recipes/${itemId}`);
  };

  const recipeImage = image_url ? image_url : noImgPlaceholder;
  const displayCookingTime = convertMinutes(cooking_time);

  return (
    <RecipeItem onClick={() => onItemClick(id)}>
      <img src={recipeImage} alt={recipe_name} loading="lazy" />
      <Title>{recipe_name}</Title>
      <RecipeInfo>
        <span>Prep time: {displayCookingTime} </span>

        <TagList>
          {tags?.slice(0, 4).map((tag) => (
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
