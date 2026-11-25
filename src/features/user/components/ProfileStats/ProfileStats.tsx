import { LuClipboardList } from 'react-icons/lu';
import { MdNavigateNext, MdFavorite } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';
import { ProfileStatsSection, StatsElement } from './ProfileStats.styled';

import { Link } from 'react-router-dom';

interface ProfileStatsProps {
  userRecipesQty: number;
  userFavoritesRecipesQty: number;
  userRecipesRating: number;
}

export const ProfileStats = ({
  userRecipesQty,
  userFavoritesRecipesQty,
  userRecipesRating,
}: ProfileStatsProps) => {
  return (
    <ProfileStatsSection>
      <StatsElement>
        <Link to={'/my-recipes'} className="info">
          <LuClipboardList />
          <h3>My Recipes</h3>
          <h2>{userRecipesQty}</h2>
          <MdNavigateNext className="nextSvg" />
        </Link>
      </StatsElement>

      <StatsElement>
        <Link to={'/my-recipes/favorites'} className="info">
          <MdFavorite />
          <h3>Favorites</h3>
          <h2>{userFavoritesRecipesQty}</h2>
          <MdNavigateNext className="nextSvg" />
        </Link>
      </StatsElement>

      <StatsElement>
        <div className="info">
          <FaStar />
          <h3>Recipe Likes</h3>
          <h2>{userRecipesRating}</h2>
        </div>
      </StatsElement>
    </ProfileStatsSection>
  );
};
