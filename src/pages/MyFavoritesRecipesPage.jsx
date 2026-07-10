import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserFavorites } from '@/features/favorites/api';
import { selectUser } from '@/app/redux/auth/selectors.js';

import {
  PageTitle,
  NoRecipesFound,
  RedirectComponent,
  RecipeCardSkeleton,
  ErrorMessage,
} from '@/components';
import { RecipesList, InputFilter } from '@/features/recipes/components';

const MyFavoritesRecipesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const { id: currentUserId } = useSelector(selectUser);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredRecipes = useMemo(
    () =>
      favorites.filter((r) =>
        r.recipe_name
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
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [currentUserId]);

  useEffect(() => {
    if (!currentUserId) return;
    loadUserFavorites();
  }, [currentUserId, loadUserFavorites]);

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
        name="filter"
        placeholder="Start typing the recipe name..."
        filterValue={filter}
        setFilterValue={setFilter}
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
