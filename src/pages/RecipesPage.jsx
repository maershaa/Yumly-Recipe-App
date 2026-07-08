import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes, selectLoading } from '@/app/redux/recipes/selectors.js';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { RecipesList, TagsFilter } from '@/features/recipes/components';
import { PageTitle, RecipeCardSkeleton } from '@/components';

const RecipesPage = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const recipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const filteredRecipes = useMemo(() => {
    if (!selectedTag || selectedTag === 'all') return recipes;

    return recipes.filter((recipe) => recipe.tags?.includes(selectedTag));
  }, [selectedTag, recipes]);
  return (
    <div>
      <PageTitle title={'What to cook today?'}> </PageTitle>

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
