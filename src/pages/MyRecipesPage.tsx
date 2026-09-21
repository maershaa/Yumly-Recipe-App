import { useEffect, useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';
import { getUserRecipes } from '@/features/recipes/api';
import { getErrorMessage } from '@/utils';
import { useRecipeSearchParams } from '@/hooks';

import {
  RecipesList,
  PageHeader,
  InputFilter,
  TagsFilter,
} from '@/features/recipes/components';
import {
  CreateButton,
  RedirectComponent,
  RecipeCardSkeleton,
  ErrorMessage,
  NoRecipesFound,
  GeneralBtn,
} from '@/components';

import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

import { useAppSelector } from '@/app/redux/hooks';
import type { Recipe } from '@/types';

const MyRecipesPage = () => {
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { id: currentUserId } = useAppSelector(selectUser);

  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [totalRecipesQty, setTotalRecipesQty] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    currentPage,
    searchInput,
    searchQuery,
    handleSearchChange,
    selectedTag,
    handleTagChange,
    handleLoadMoreBtnClick,
    hasMoreRecipes,
  } = useRecipeSearchParams(totalRecipesQty);

  const isInitialLoading =
    isLoading && (currentPage === 1 || !userRecipes.length);
  const isLoadingMore = isLoading && !isInitialLoading;

  const hasNoRecipes =
    !isLoading &&
    !error &&
    !userRecipes.length &&
    searchQuery === '' &&
    selectedTag === 'all';

  const hasNoSearchResults =
    !isLoading &&
    !error &&
    !userRecipes.length &&
    (searchQuery !== '' || selectedTag !== 'all');

  const loadUserRecipes = useCallback(
    async (userId: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getUserRecipes({
          currentUserId: userId,
          searchQuery,
          tag: selectedTag,
          currentPage,
        });

        setUserRecipes((prevValue) => {
          if (currentPage === 1) {
            return data.recipes;
          } else {
            return [...prevValue, ...data.recipes];
          }
        });
        setTotalRecipesQty(data.totalRecipesQty);
      } catch (error) {
        console.error('Failed to load user recipes:', getErrorMessage(error));
        setError('Failed to load your recipes. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [searchQuery, selectedTag, currentPage],
  );

  useEffect(() => {
    // Загружаем рецепты при:
    // 1. авторизации пользователя;
    // 2. изменении пользователя;
    // 3. изменении searchQuery в URL.
    // 4. при изменении tag.
    // 5. при изменении currentPage
    if (!isLoggedIn) return;

    loadUserRecipes(currentUserId); // searchQuery, currentPage и tag используются внутри loadUserRecipes
  }, [isLoggedIn, currentUserId, loadUserRecipes]);

  if (error) {
    return (
      <div>
        <PageHeader title="Recipes">
          <CreateButton
            onClick={() => navigate('new')}
            btnText="Add new recipe"
          />
        </PageHeader>

        <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />

        <InputFilter
          type="text"
          name="searchQuery"
          placeholder="Start typing the recipe name..."
          value={searchInput}
          onChange={handleSearchChange}
        />

        <ErrorMessage
          message={error}
          onRetry={() => loadUserRecipes(currentUserId)}
        />
        <Outlet />
      </div>
    );
  }

  if (isInitialLoading) {
    return (
      <div>
        <PageHeader title="Recipes">
          <CreateButton
            onClick={() => navigate('new')}
            btnText="Add new recipe"
          />
        </PageHeader>
        <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />

        <InputFilter
          type="text"
          name="searchQuery"
          placeholder="Start typing the recipe name..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        <RecipeCardSkeleton count={RECIPES_PER_PAGE} />
        <Outlet />
      </div>
    );
  }

  if (hasNoRecipes) {
    return (
      <div>
        <PageHeader title="Recipes">
          <CreateButton
            onClick={() => navigate('new')}
            btnText="Add new recipe"
          />
        </PageHeader>

        <RedirectComponent
          spanText="There are no recipes yet."
          linkText="Add new recipe"
          to="new"
        />
        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Recipes">
        <CreateButton
          onClick={() => navigate('new')}
          btnText="Add new recipe"
        />
      </PageHeader>

      <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={searchInput}
        onChange={handleSearchChange}
      />

      {/* Ничего не найдено (после завершения загрузки) те  поиск или фильтр по тегу не дали результатов. */}
      {hasNoSearchResults && <NoRecipesFound />}

      {/* Список рецептов */}
      {userRecipes.length > 0 && <RecipesList recipes={userRecipes} />}

      {/* Скелетон снизу при дозагрузке */}
      {isLoadingMore && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {hasMoreRecipes && !isLoadingMore && (
        <GeneralBtn
          type={'button'}
          onClick={handleLoadMoreBtnClick}
          disabled={isLoading || !hasMoreRecipes}
          variant="loadMore"
        >
          Load more
        </GeneralBtn>
      )}

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
