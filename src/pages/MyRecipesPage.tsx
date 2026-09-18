import { useEffect, useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router';

import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';
import { getUserRecipes } from '@/features/recipes/api';
import { getErrorMessage } from '@/utils';

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
} from '@/components';

import { useDebounce } from '@/hooks';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

import { useAppSelector } from '@/app/redux/hooks';
import type { Recipe, MainTagsValue } from '@/types';
import type { ChangeEvent } from 'react';

const MyRecipesPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { id: currentUserId } = useAppSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  const searchQuery = searchParams.get('q') ?? '';
  const [searchInput, setSearchInput] = useState(searchQuery); // Значение, которое пользователь сейчас печатает
  const debouncedSearchQuery = useDebounce(searchInput, 300);

  const navigate = useNavigate();

  const loadUserRecipes = useCallback(
    async (userId: string) => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getUserRecipes({
          currentUserId: userId,
          searchQuery,
        });
        setUserRecipes(data);
      } catch (error) {
        console.error('Failed to load user recipes:', getErrorMessage(error));
        setError('Failed to load your recipes. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [searchQuery],
  );

  useEffect(() => {
    if (!isLoggedIn) return;

    // Синхронизируем input с URL.
    // При переходе назад/вперёд через браузер: URL изменился → searchQuery изменился → input тоже должен измениться.
    setSearchInput(searchQuery);
  }, [isLoggedIn, searchQuery]);

  useEffect(() => {
    if (!isLoggedIn) return;

    // Если значение в input уже соответствует URL то ничего делать не нужно.
    if (debouncedSearchQuery === searchQuery) return;

    // Пользователь закончил ввод. Обновляем URL и начинаем поиск с первой страницы, потому что результат нового поиска должен начинаться сначала.
    setSearchParams((prevValue) => {
      if (debouncedSearchQuery) {
        prevValue.set('q', debouncedSearchQuery);
      } else {
        prevValue.delete('q');
      }
      return prevValue;
    });
  }, [isLoggedIn, debouncedSearchQuery, searchQuery, setSearchParams]);

  useEffect(() => {
    // Загружаем рецепты при:
    // 1. авторизации пользователя;
    // 2. изменении пользователя;
    // 3. изменении searchQuery в URL.
    if (!isLoggedIn) return;

    loadUserRecipes(currentUserId);
  }, [isLoggedIn, currentUserId, loadUserRecipes]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  if (error) {
    return (
      <div>
        <PageHeader title="Recipes">
          <CreateButton
            onClick={() => navigate('new')}
            btnText="Add new recipe"
          />
        </PageHeader>

        <ErrorMessage
          message={error}
          onRetry={() => loadUserRecipes(currentUserId)}
        />
      </div>
    );
  }

  if (!isLoading && !userRecipes.length && searchQuery === '') {
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

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={searchInput}
        onChange={handleSearchChange}
      />

      {isLoading && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {!isLoading && userRecipes.length > 0 && (
        <RecipesList recipes={userRecipes} />
      )}

      {!isLoading && userRecipes.length === 0 && searchQuery !== '' && (
        <NoRecipesFound />
      )}

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
