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
  GeneralBtn,
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
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const tag = (searchParams.get('tag') ?? 'all') as MainTagsValue;
  const searchQuery = searchParams.get('q') ?? '';
  const currentPage = Number(searchParams.get('page') ?? 1);

  const [searchInput, setSearchInput] = useState(searchQuery); // Значение, которое пользователь сейчас печатает
  const debouncedSearchQuery = useDebounce(searchInput, 300);

  const [totalRecipesQty, setTotalRecipesQty] = useState(0);
  const totalPages = Math.ceil(totalRecipesQty / RECIPES_PER_PAGE);

  const hasMoreRecipes = currentPage < totalPages;

  const isInitialLoading = isLoading && !userRecipes.length;
  const isLoadingMore = isLoading && userRecipes.length > 0;

  const hasNoRecipes =
    !isLoading && !userRecipes.length && searchQuery === '' && tag === 'all';

  const hasNoSearchResults =
    !isLoading && !userRecipes.length && (searchQuery !== '' || tag !== 'all');

  const navigate = useNavigate();

  const loadUserRecipes = useCallback(
    async (userId: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getUserRecipes({
          currentUserId: userId,
          searchQuery,
          tag,
          currentPage: currentPage,
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
    [searchQuery, tag, currentPage],
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
      // Сбрасываем пагинацию при изменении поиска.
      prevValue.delete('page');
      return prevValue;
    });
  }, [isLoggedIn, debouncedSearchQuery, searchQuery, setSearchParams]);

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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleTagChange = (chosenTag: MainTagsValue) => {
    // После изменения URL:
    // 1. изменится selectedTag;
    // 2. изменится loadUserRecipes;
    // 3. effect загрузки запустит новый запрос.
    //
    setSearchParams((prevValue) => {
      if (chosenTag === 'all') {
        prevValue.delete('tag');
      } else {
        prevValue.set('tag', chosenTag);
      }
      // Сбрасываем пагинацию при изменении фильтра.
      prevValue.delete('page');
      return prevValue;
    });
  };

  const onLoadMoreBtnClick = () => {
    setSearchParams((prevValue) => {
      prevValue.set('page', String(currentPage + 1));
      return prevValue;
    });
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

  if (isInitialLoading) {
    return (
      <div>
        <PageHeader title="Recipes">
          <CreateButton
            onClick={() => navigate('new')}
            btnText="Add new recipe"
          />
        </PageHeader>

        <TagsFilter selectedTag={tag} onClick={handleTagChange} />

        <InputFilter
          type="text"
          name="searchQuery"
          placeholder="Start typing the recipe name..."
          value={searchInput}
          onChange={handleSearchChange}
        />

        <RedirectComponent
          spanText="There are no recipes yet."
          linkText="Add new recipe"
          to="new"
        />
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

        <TagsFilter selectedTag={tag} onClick={handleTagChange} />

        <InputFilter
          type="text"
          name="searchQuery"
          placeholder="Start typing the recipe name..."
          value={searchInput}
          onChange={handleSearchChange}
        />

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

      <TagsFilter selectedTag={tag} onClick={handleTagChange} />

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={searchInput}
        onChange={handleSearchChange}
      />

      {!isInitialLoading && userRecipes.length > 0 && (
        <RecipesList recipes={userRecipes} />
      )}

      {isLoadingMore && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {hasMoreRecipes && (
        <GeneralBtn
          type={'button'}
          onClick={onLoadMoreBtnClick}
          disabled={!hasMoreRecipes}
          variant={'loadMore'}
        >
          Load More
        </GeneralBtn>
      )}

      {/* Если поиск или фильтр по тегу не дали результатов. */}
      {hasNoSearchResults && <NoRecipesFound />}

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
