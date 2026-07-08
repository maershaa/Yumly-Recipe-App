import { ImgWrapper, ToggleFavoriteBtn } from './ImageSection.styled';
import { noImgPlaceholder } from '@/assets/images';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { toast } from 'sonner';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '@/features/favorites/api';
import { useSelector } from 'react-redux';
import { selectUser } from '@/app/redux/auth/selectors';
import { useState } from 'react';

const ImageSection = ({
  id,
  recipe_name,
  servings,
  cooking_time,
  image_url,
  favorites = [],
  likes = 0,
  setRecipe,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { id: currentUserId } = useSelector(selectUser);

  const recipeImage = image_url ? image_url : noImgPlaceholder;

  const isFavorite = favorites.some((fav) => fav.user_id === currentUserId);

  const handleToggleFavorite = async () => {
    if (isLoading) return;

    if (!currentUserId) {
      toast.info('Please log in previously');
      return;
    }

    setIsLoading(true);

    try {
      if (!isFavorite) {
        await addRecipeToFavorites(id, currentUserId);
        setRecipe((prev) => ({
          ...prev,
          favorites: [...prev.favorites, { user_id: currentUserId }],
          likes: prev.likes + 1,
        }));
      } else {
        await removeRecipeFromFavorites(id, currentUserId);

        setRecipe((prev) => ({
          ...prev,
          favorites: [
            ...prev.favorites.filter((el) => el.user_id !== currentUserId),
          ],
          likes: prev.likes - 1,
        }));
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
      console.log('handleToggleFavorite => favorites', favorites);
    }
  };

  return (
    <ImgWrapper>
      <img src={recipeImage} alt={recipe_name} loading="lazy" />
      <ToggleFavoriteBtn onClick={handleToggleFavorite} disabled={isLoading}>
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </ToggleFavoriteBtn>
      <div className="badgesWrapper">
        <span className="badge">
          <AiOutlineClockCircle />
          {cooking_time}
        </span>

        <span className="badge">
          <BsPerson />
          {servings} servings
        </span>

        <span className="badge">
          <MdFavoriteBorder />
          {likes} likes
        </span>
      </div>
    </ImgWrapper>
  );
};

export { ImageSection };
