import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import {
  selectRecipes,
  selectLoading,
  selectTotalRecipesQty,
} from '@/app/redux/recipes/selectors';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks';

import { useDebounce } from '@/hooks';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

import {
  PageTitle,
  RecipeCardSkeleton,
  GeneralBtn,
  NoRecipesFound,
} from '@/components';
import {
  RecipesList,
  TagsFilter,
  InputFilter,
} from '@/features/recipes/components';

import type { MainTagsValue } from '@/types';
import type { ChangeEvent } from 'react';

const RecipesPage = () => {
  const dispatch = useAppDispatch();

  // URL является источником истины для page, tag и q.
  // Поэтому при изменении этих параметров React Router перерисует страницу
  // и ниже мы получим актуальные значения из searchParams.
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const tagParam = searchParams.get('tag');

  const selectedTag = (tagParam ?? 'all') as MainTagsValue; //!searchParams.get() возвращает: string | null и потому TypeScript не может гарантировать, что произвольная строка — это именно MainTagsValue. 'as MainTagsValue' говорит "Поверь мне, там всегда допустимый tag". А пользователь вполне может открыть:"/recipes?tag=abracadabra"

  const searchQuery = searchParams.get('q') ?? ''; // Берём поисковый запрос непосредственно из URL.

  const [searchInput, setSearchInput] = useState(searchQuery); // Значение, которое пользователь сейчас печатает

  const debouncedSearchQuery = useDebounce(searchInput, 300);

  const recipes = useAppSelector(selectRecipes);
  const totalRecipesQty = useAppSelector(selectTotalRecipesQty);
  const isLoading = useAppSelector(selectLoading);

  const totalPages = Math.ceil(totalRecipesQty / RECIPES_PER_PAGE);

  const hasMoreRecipes = currentPage < totalPages;
  const isInitialLoading = isLoading && recipes.length === 0; // Первая загрузка: рецептов ещё нет и сейчас выполняется запрос.

  const isLoadingMore = isLoading && recipes.length > 0; // Загрузка следующей страницы

  useEffect(() => {
    // Синхронизируем input с URL.
    // При переходе назад/вперёд через браузер: URL изменился → searchQuery изменился → input тоже должен измениться.
    setSearchInput(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    // Если значение в input уже соответствует URL то ничего делать не нужно.
    if (debouncedSearchQuery === searchQuery) return;

    // Пользователь закончил ввод. Обновляем URL и начинаем поиск с первой страницы, потому что результат нового поиска должен начинаться сначала.
    setSearchParams((prevValue) => {
      prevValue.set('page', String(1));
      prevValue.set('q', debouncedSearchQuery);
      return prevValue;
    });
  }, [debouncedSearchQuery, searchQuery, setSearchParams]);

  useEffect(() => {
    // Запрашиваем рецепты на основании данных из URL. Когда переход по ссылке скинутой другим пользователем, например.
    dispatch(
      fetchRecipes({
        currentPage,
        tag: selectedTag,
        searchQuery,
      }),
    );
  }, [dispatch, currentPage, selectedTag, searchQuery]);

  const handleLoadMore = (): void => {
    if (hasMoreRecipes) {
      // Не создаём новый набор параметров, а изменяем только page. Поэтому существующие q и tag сохраняются.
      setSearchParams((prevValue) => {
        prevValue.set('page', String(currentPage + 1));
        return prevValue;
      });
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Пока пользователь печатает, меняем только локальное состояние input.
    // URL и запрос к Supabase изменятся после debounce.
    setSearchInput(e.target.value);
  };

  const handleTagChange = (value: MainTagsValue) => {
    // При выборе нового тега начинаем с первой страницы.
    // Остальные параметры URL сохраняем, в частности поисковый запрос.
    setSearchParams((prevValue) => {
      prevValue.set('page', String(1));
      prevValue.set('tag', value);
      return prevValue;
    });
  };

  return (
    <div>
      <PageTitle title={'What to cook today?'} />

      <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={searchInput}
        onChange={handleSearchChange}
      />

      {isInitialLoading && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {!isInitialLoading && recipes.length > 0 && (
        <RecipesList recipes={recipes} />
      )}

      {!isInitialLoading && recipes.length === 0 && <NoRecipesFound />}

      {isLoadingMore && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {hasMoreRecipes && !isLoadingMore && (
        <GeneralBtn
          type="button"
          onClick={handleLoadMore}
          disabled={isLoading} //защищает от повторного клика во время запроса
          variant={'loadMore'}
        >
          LoadMore
        </GeneralBtn>
      )}
    </div>
  );
};

export default RecipesPage;
