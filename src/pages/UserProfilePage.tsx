import {
  ProfileHeader,
  ProfileStats,
  PersonalInfo,
  AccountSettings,
} from '@/features/user';
import { selectUser } from '@/app/redux/auth/selectors';
import { useAppSelector } from '@/app/redux/hooks';
import { useEffect, useState } from 'react';
import { getUserInfo } from '@/features/user/api';

const UserProfilePage = () => {
  const { id, email, name, created_at } = useAppSelector(selectUser);

  const registerDate = new Date(created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [user, setUser] = useState<{
    userRecipesQty: number | 0;
    userFavoritesRecipesQty: number | 0;
    userRecipesTotalLikes: number | 0;
  }>({
    userRecipesQty: 0,
    userFavoritesRecipesQty: 0,
    userRecipesTotalLikes: 0,
  });

  const loadUserInfo = async () => {
    const { likes, totalUserRecipes, favoriteRecipesQty } =
      await getUserInfo(id);

    if (!likes) return;
    const likesQty = likes.reduce((acc, currentEl) => {
      return acc + currentEl.likes;
    }, 0);

    const value = {
      userRecipesQty: totalUserRecipes || 0,
      userFavoritesRecipesQty: favoriteRecipesQty || 0,
      userRecipesTotalLikes: likesQty || 0,
    };

    setUser(value);
  };

  useEffect(() => {
    loadUserInfo();
  }, [id]);

  return (
    <div>
      <ProfileHeader name={name} />
      <ProfileStats
        userRecipesQty={user.userRecipesQty}
        userFavoritesRecipesQty={user.userFavoritesRecipesQty}
        userRecipesRating={user.userRecipesTotalLikes}
      />
      <PersonalInfo name={name} email={email} registerDate={registerDate} />

      <AccountSettings />
    </div>
  );
};

export default UserProfilePage;
