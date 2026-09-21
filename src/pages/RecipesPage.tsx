import { useEffect } from 'react';

import {
  selectRecipes,
  selectLoading,
  selectError,
  selectTotalRecipesQty,
} from '@/app/redux/recipes/selectors';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks';

import { useRecipeSearchParams } from '@/hooks';
import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

import {
  PageTitle,
  RedirectComponent,
  RecipeCardSkeleton,
  ErrorMessage,
  GeneralBtn,
  NoRecipesFound,
} from '@/components';
import {
  RecipesList,
  TagsFilter,
  InputFilter,
} from '@/features/recipes/components';

const RecipesPage = () => {
  const dispatch = useAppDispatch();

  const recipes = useAppSelector(selectRecipes);
  const totalRecipesQty = useAppSelector(selectTotalRecipesQty);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

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

  const isInitialLoading = isLoading && (currentPage === 1 || !recipes.length);
  const isLoadingMore = isLoading && !isInitialLoading;

  const hasNoRecipes =
    !isLoading &&
    !error &&
    !recipes.length &&
    searchQuery === '' &&
    selectedTag === 'all';

  const hasNoSearchResults =
    !isLoading &&
    !error &&
    !recipes.length &&
    (searchQuery !== '' || selectedTag !== 'all');

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

  if (error) {
    return (
      <div>
        <PageTitle title="What to cook today?" />
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
          onRetry={() =>
            dispatch(
              fetchRecipes({
                currentPage,
                tag: selectedTag,
                searchQuery,
              }),
            )
          }
        />
      </div>
    );
  }

  if (isInitialLoading) {
    return (
      <div>
        <PageTitle title="What to cook today?" />
        <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />
        <InputFilter
          type="text"
          name="searchQuery"
          placeholder="Start typing the recipe name..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        <RecipeCardSkeleton count={RECIPES_PER_PAGE} />
      </div>
    );
  }

  if (hasNoRecipes)
    //!доработать
    return (
      <div>
        <PageTitle title="What to cook today?" />

        <RedirectComponent
          spanText="No recipes have been shared yet."
          linkText="Be the first to add one"
          to="/my-recipes/new"
        />
      </div>
    );

  return (
    <div>
      <PageTitle title="What to cook today?" />

      <TagsFilter selectedTag={selectedTag} onClick={handleTagChange} />

      <InputFilter
        type="text"
        name="searchQuery"
        placeholder="Start typing the recipe name..."
        value={searchInput}
        onChange={handleSearchChange}
      />

      {/* Ничего не найдено (после завершения загрузки) */}
      {hasNoSearchResults && <NoRecipesFound />}

      {/* Список рецептов */}
      {recipes.length > 0 && <RecipesList recipes={recipes} />}

      {/* Скелетон снизу при дозагрузке */}
      {isLoadingMore && <RecipeCardSkeleton count={RECIPES_PER_PAGE} />}

      {hasMoreRecipes && !isLoadingMore && (
        <GeneralBtn
          type="button"
          onClick={handleLoadMoreBtnClick}
          disabled={isLoading || !hasMoreRecipes}
          //защищает от повторного клика во время запроса
          variant="loadMore"
        >
          Load more
        </GeneralBtn>
      )}
    </div>
  );
};

export default RecipesPage;
