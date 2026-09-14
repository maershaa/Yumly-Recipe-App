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

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const tagParam = searchParams.get('tag');
  const selectedTag = (tagParam ?? 'all') as MainTagsValue; //!searchParams.get() возвращает: string | null и потому TypeScript не может гарантировать, что произвольная строка — это именно MainTagsValue. 'as MainTagsValue' говорит "Поверь мне, там всегда допустимый tag". А пользователь вполне может открыть:"/recipes?tag=abracadabra"

  const searchQuery = searchParams.get('q') ?? '';
  const [searchInput, setSearchInput] = useState(searchQuery); // Значение, которое пользователь сейчас печатает

  const debouncedSearchValue = useDebounce(searchInput, 300);

  const recipes = useAppSelector(selectRecipes);
  const totalRecipesQty = useAppSelector(selectTotalRecipesQty);
  const isLoading = useAppSelector(selectLoading);

  const totalPages = Math.ceil(totalRecipesQty / RECIPES_PER_PAGE);

  const hasMoreRecipes = currentPage < totalPages;
  const isInitialLoading = isLoading && recipes.length === 0;
  const isLoadingMore = isLoading && recipes.length > 0;

  useEffect(() => {
    // При изменении поискового запроса меняем url
    setSearchInput(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedSearchValue === searchQuery) return;

    setSearchParams((prevValue) => {
      prevValue.set('page', String(1));
      prevValue.set('q', debouncedSearchValue);
      return prevValue;
    });
  }, [debouncedSearchValue, searchQuery, setSearchParams]);

  useEffect(() => {
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
      setSearchParams((prevValue) => {
        prevValue.set('page', String(currentPage + 1));
        return prevValue;
      });
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleTagChange = (value: MainTagsValue) => {
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

      {recipes.length > 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <NoRecipesFound />
      )}

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
