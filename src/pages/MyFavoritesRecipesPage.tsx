import { useCallback, useEffect, useState } from 'react';

import { getUserFavorites } from '@/features/favorites/api';
import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';

import {
  PageTitle,
  NoRecipesFound,
  RedirectComponent,
  RecipeCardSkeleton,
  ErrorMessage,
  GeneralBtn,
} from '@/components';
import {
  RecipesList,
  InputFilter,
  TagsFilter,
} from '@/features/recipes/components';

import { useAppSelector } from '@/app/redux/hooks';
import type { Recipe } from '@/types';
import { getErrorMessage } from '@/utils';
import { useRecipeSearchParams } from '@/hooks';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

const MyFavoritesRecipesPage = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { id: currentUserId } = useAppSelector(selectUser);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    currentPage,
    searchInput,
    searchQuery,
    handleSearchChange,
    selectedTag,
    handleTagChange,
    setTotalRecipesQty,
    handleLoadMoreBtnClick,
    hasMoreRecipes,
  } = useRecipeSearchParams();

  const isInitialLoading = isLoading && currentPage === 1;
  const isLoadingMore = isLoading && currentPage > 1;

  const hasNoFavoritesRecipes =
    !favorites.length && !searchQuery && selectedTag === 'all'; // У пользователя вообще нет избранных рецептов
  const hasNoSearchResults =
    !favorites.length && (searchQuery !== '' || selectedTag !== 'all'); // Фильтры применены, но подходящих рецептов не найдено.

  const loadUserFavorites = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getUserFavorites({
        currentUserId,
        currentPage,
        tag: selectedTag,
        searchQuery,
      });

      if (currentPage === 1) {
        setFavorites(data.recipes);
      } else {
        setFavorites((prev) => [...prev, ...data.recipes]);
      }

      setTotalRecipesQty(data.totalRecipesQty);
    } catch (error) {
      console.error('Failed to load favorite recipes:', getErrorMessage(error));
      setError('Failed to load your favorite recipes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [
    currentUserId,
    currentPage,
    searchQuery,
    selectedTag,
    setTotalRecipesQty,
  ]);

  useEffect(() => {
    if (!isLoggedIn) return;
    loadUserFavorites();
  }, [isLoggedIn, currentUserId, loadUserFavorites]);

  if (isInitialLoading) {
    return (
      <div>
        <PageTitle title={'Favorites'} />
        <RecipeCardSkeleton count={RECIPES_PER_PAGE} />
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

  if (hasNoFavoritesRecipes)
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

      <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={searchInput}
        onChange={handleSearchChange}
      />

      {/* 1. Первая загрузка */}
      {isInitialLoading && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {/* 2. Ничего не найдено (после завершения загрузки) */}
      {hasNoSearchResults && <NoRecipesFound />}

      {/* 3. Список рецептов */}
      {favorites.length > 0 && !isInitialLoading && (
        <RecipesList recipes={favorites} />
      )}

      {/* 4. Скелетон снизу при дозагрузке */}
      {isLoadingMore && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {hasMoreRecipes && (
        <GeneralBtn
          type="button"
          onClick={handleLoadMoreBtnClick}
          disabled={isLoading || !hasMoreRecipes}
          variant={'loadMore'}
        >
          Load more
        </GeneralBtn>
      )}
    </div>
  );
};

export default MyFavoritesRecipesPage;
