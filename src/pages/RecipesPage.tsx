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
import { useRecipeSearchParams } from '@/hooks';
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

  const recipes = useAppSelector(selectRecipes);
  const totalRecipesQty = useAppSelector(selectTotalRecipesQty);
  const isLoading = useAppSelector(selectLoading);

  const {
    currentPage,
    searchInput,
    searchQuery,
    handleSearchChange,
    selectedTag,
    handleTagChange,
    handleLoadMoreBtnClick,
    hasMoreRecipes,
    setTotalRecipesQty,
  } = useRecipeSearchParams();

  const isInitialLoading = isLoading && currentPage === 1;
  const isLoadingMore = isLoading && currentPage > 1;

  useEffect(() => {
    setTotalRecipesQty(totalRecipesQty); //!это разумный вариант или костыль? как лучше?

    // Запрашиваем рецепты на основании данных из URL. Когда переход по ссылке скинутой другим пользователем, например.
    dispatch(
      fetchRecipes({
        currentPage,
        tag: selectedTag,
        searchQuery,
      }),
    );
  }, [dispatch, currentPage, selectedTag, searchQuery]);

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

      {/* 1. Первая загрузка */}
      {isInitialLoading && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {/* 2. Ничего не найдено (после завершения загрузки) */}
      {!isLoading && recipes.length === 0 && <NoRecipesFound />}

      {/* 3. Список рецептов */}
      {recipes.length > 0 && !isInitialLoading && (
        <RecipesList recipes={recipes} />
      )}

      {/* 4. Скелетон снизу при дозагрузке */}
      {isLoadingMore && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {hasMoreRecipes && !isLoadingMore && (
        <GeneralBtn
          type="button"
          onClick={handleLoadMoreBtnClick}
          disabled={isLoading || !hasMoreRecipes}
          //защищает от повторного клика во время запроса
          variant={'loadMore'}
        >
          Load more
        </GeneralBtn>
      )}
    </div>
  );
};

export default RecipesPage;
