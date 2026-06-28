import { Header, ImgWrapper } from './RecipeHeader.styled';
import { noImgPlaceholder } from '@/assets/images';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectUser } from '@/app/redux/auth/selectors';
import { toast } from 'sonner';

import { BsPerson } from 'react-icons/bs';
import { SummarySection } from '@/features/recipes/components';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '@/features/favorites/api';

const RecipeHeader = ({ recipe, setRecipe }) => {
  const { id: currentUserId } = useSelector(selectUser);

  const {
    user_id,
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
    favorites = [],
    // ingredients = [],
    // instructions,
  } = recipe;

  const recipeImage = image_url ? image_url : noImgPlaceholder;

  const isFavorite = favorites.some((fav) => fav.user_id === currentUserId);

  const handleToggleFavorite = async () => {
    if (!currentUserId) {
      toast.info('Please log in earlier');
      return;
    }

    try {
      if (!isFavorite) {
        await addRecipeToFavorites(id, currentUserId);
        setRecipe((prev) => ({
          ...prev,
          favorites: [...prev.favorites, { user_id: currentUserId }],
        }));
      } else {
        await removeRecipeFromFavorites(id, currentUserId);
        setRecipe((prev) => ({
          ...prev,
          favorites: [
            ...prev.favorites.filter((el) => el.user_id !== currentUserId),
          ],
        }));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Header>
      <ImgWrapper>
        <img src={recipeImage} alt={recipe_name} loading="lazy" />

        {isFavorite ? (
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
