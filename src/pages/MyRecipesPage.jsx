import { useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '@/app/redux/auth/selectors.js';
import { getUserRecipes } from '@/features/recipes/api';

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

const MyRecipesPage = () => {
  const { id: currentUserId } = useSelector(selectUser);
  const [filter, setFilter] = useState('');
  const [userRecipes, setUserRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const filteredRecipes = useMemo(
    () =>
      userRecipes?.filter((r) =>
        r.recipe_name
          .trim()
          .toLowerCase()
          .includes(filter.trim().toLowerCase()),
      ),
    [filter, userRecipes],
  );

  const loadUserRecipes = async (userId) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getUserRecipes(userId);
      setUserRecipes(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!currentUserId) return;

    loadUserRecipes(currentUserId);
  }, [currentUserId]);

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
