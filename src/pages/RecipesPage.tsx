import { useEffect, useMemo, useState } from 'react';
import { selectRecipes, selectLoading } from '@/app/redux/recipes/selectors.js';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { RecipesList, TagsFilter } from '@/features/recipes/components';
import { PageTitle, RecipeCardSkeleton } from '@/components';
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks';

const RecipesPage = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const recipes = useAppSelector(selectRecipes);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const filteredRecipes = useMemo(() => {
    if (!selectedTag || selectedTag === 'all') return recipes;

    return recipes.filter((recipe) => recipe.tags?.includes(selectedTag));
  }, [selectedTag, recipes]);
  return (
    <div>
      <PageTitle title={'What to cook today?'} />

      <TagsFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      {isLoading ? (
        <RecipeCardSkeleton count={13} />
      ) : (
        <RecipesList recipes={filteredRecipes} />
      )}
    </div>
  );
};

export default RecipesPage;
