import { Header, ImgWrapper } from './RecipeHeader.styled';
import { noImgPlaceholder } from '@/assets/images';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { SummarySection } from '@/features/recipes/components';

import { useState } from 'react';

const RecipeHeader = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);

  console.log('🚀 ~ RecipeHeader ~ recipe:', recipe);
  const {
    id,
    recipe_name,
    description,
    // cuisine,
    // difficulty,
    servings,
    // likes,
    // tips,
    image_url,
    cooking_time,
    tags = [],
    // ingredients = [],
    // instructions,
  } = recipe;
  const recipeImage = image_url ? image_url : noImgPlaceholder;

  const handleToggleFavorite = async () => {
    const nextLike = !isLiked;

    setIsLiked(nextLike);

    // ! Добавить логику +1 и -1 like
  };

  return (
    <Header>
      <ImgWrapper>
        <img src={recipeImage} alt={recipe_name} loading="lazy" />

        {isLiked ? (
          <MdFavorite
            size={22}
            className="liked chosen"
            onClick={handleToggleFavorite}
          />
        ) : (
          <MdFavoriteBorder
            size={22}
            className="liked"
            onClick={handleToggleFavorite}
          />
        )}
        <div className="badgesWrapper">
          <span className="badge">
            <AiOutlineClockCircle size={22} />
            {cooking_time} min
          </span>

          <span className="badge">
            <BsPerson size={22} />
            {servings} servings
          </span>
        </div>
      </ImgWrapper>
      <SummarySection
        id={id}
        recipe_name={recipe_name}
        cooking_time={cooking_time}
        description={description}
        tags={tags}
      />
    </Header>
  );
};

export { RecipeHeader };
