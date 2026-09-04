import { useEffect, useMemo, useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';
import { getUserRecipes } from '@/features/recipes/api';
import { getErrorMessage } from '@/utils';

import {
  RecipesList,
  PageHeader,
  InputFilter,
} from '@/features/recipes/components';
import {
  CreateButton,
  RedirectComponent,
  RecipeCardSkeleton,
  ErrorMessage,
  NoRecipesFound,
} from '@/components';

import { useAppSelector } from '@/app/redux/hooks';
import type { Recipe } from '@/types';

const MyRecipesPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { id: currentUserId } = useAppSelector(selectUser);
  const [filter, setFilter] = useState('');
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const filteredRecipes = useMemo(
    () =>
      userRecipes.filter(
        ({ recipe_name }) =>
          recipe_name &&
          recipe_name
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase()),
      ),
    [filter, userRecipes],
  );

  const loadUserRecipes = useCallback(async (userId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getUserRecipes(userId);
      setUserRecipes(data);
    } catch (error) {
      console.error('Failed to load user recipes:', getErrorMessage(error));
      setError('Failed to load your recipes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    loadUserRecipes(currentUserId);
  }, [isLoggedIn, currentUserId, loadUserRecipes]);

  if (isLoading) {
    return (
      <div>
        <PageHeader title="Recipes">
          <CreateButton
            onClick={() => navigate('new')}
            btnText="Add new recipe"
          />
        </PageHeader>

        <RecipeCardSkeleton count={8} />
      </div>
    );
  }

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

  if (!userRecipes.length) {
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

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
