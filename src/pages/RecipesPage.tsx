import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

import {
  selectRecipes,
  selectLoading,
  selectTotalRecipesQty,
} from '@/app/redux/recipes/selectors';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks';

import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

import { PageTitle, RecipeCardSkeleton, GeneralBtn } from '@/components';
import { RecipesList, TagsFilter } from '@/features/recipes/components';

import type { MainTagsValue } from '@/types';

const RecipesPage = () => {
  const [selectedTag, setSelectedTag] = useState<MainTagsValue>('all');

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const recipes = useAppSelector(selectRecipes);
  const totalRecipesQty = useAppSelector(selectTotalRecipesQty);
  const isLoading = useAppSelector(selectLoading);

  const dispatch = useAppDispatch();

  const totalPages = Math.ceil(totalRecipesQty / RECIPES_PER_PAGE);

  const hasMoreRecipes = currentPage < totalPages;
  const isInitialLoading = isLoading && recipes.length === 0;
  const isLoadingMore = isLoading && recipes.length > 0;

  useEffect(() => {
    dispatch(fetchRecipes({ currentPage }));
  }, [dispatch, currentPage]);

  const filteredRecipes = useMemo(() => {
    if (selectedTag === 'all') return recipes;

    return recipes.filter((recipe) => recipe.tags?.includes(selectedTag));
  }, [selectedTag, recipes]);

  const handleLoadMore = (): void => {
    if (hasMoreRecipes) {
      setSearchParams({ page: String(currentPage + 1) });
    }
  };

  return (
    <div>
      <PageTitle title={'What to cook today?'} />

      <TagsFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      {isInitialLoading && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      <RecipesList recipes={filteredRecipes} />

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
