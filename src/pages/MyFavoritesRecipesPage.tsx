import { useCallback, useEffect, useMemo, useState } from 'react';

import { getUserFavorites } from '@/features/favorites/api';
import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';

import {
  PageTitle,
  NoRecipesFound,
  RedirectComponent,
  RecipeCardSkeleton,
  ErrorMessage,
} from '@/components';
import { RecipesList, InputFilter } from '@/features/recipes/components';
import { useAppSelector } from '@/app/redux/hooks';
import type { Recipe } from '@/types';
import { getErrorMessage } from '@/utils';

const MyFavoritesRecipesPage = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { id: currentUserId } = useAppSelector(selectUser);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredRecipes = useMemo(
    () =>
      favorites.filter(
        ({ recipe_name }) =>
          recipe_name &&
          recipe_name
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase()),
      ),
    [filter, favorites],
  );

  const loadUserFavorites = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getUserFavorites(currentUserId);
      setFavorites(data);
    } catch (error) {
      console.error('Failed to load favorite recipes:', getErrorMessage(error));
      setError('Failed to load your favorite recipes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [currentUserId]);

  useEffect(() => {
    if (!isLoggedIn) return;
    loadUserFavorites();
  }, [isLoggedIn, currentUserId, loadUserFavorites]);

  if (isLoading) {
    return (
      <div>
        <PageTitle title={'Favorites'} />
        <RecipeCardSkeleton count={8} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <PageTitle title={'Favorites'} />
        <ErrorMessage message={error} onRetry={() => loadUserFavorites()} />
      </div>
    );
  }

  if (!favorites.length)
    return (
      <div>
        <PageTitle title={'Favorites'} />

        <RedirectComponent
          spanText="You don't have any favorite recipes yet."
          linkText="Choose your first favorite recipe"
          to="/recipes"
        />
      </div>
    );

  return (
    <div>
      <PageTitle title={'Favorites'} />

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filteredRecipes.length > 0 ? (
        <RecipesList recipes={filteredRecipes} />
      ) : (
        <NoRecipesFound />
      )}
    </div>
  );
};

export default MyFavoritesRecipesPage;
