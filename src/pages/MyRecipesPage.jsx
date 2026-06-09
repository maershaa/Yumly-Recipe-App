import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/recipes/selectors.js';
import { useMemo, useState } from 'react';
// import { fetchRecipes } from '@/app/redux/recipes/operations';
import {
  RecipesList,
  PageHeader,
  InputFilter,
} from '@/features/recipes/components';
import { CreateButton, RedirectComponent } from '@/components';

const MyRecipesPage = () => {
  const [filter, setFilter] = useState('');
  const recipes = useSelector(selectRecipes);
  const navigate = useNavigate();

  const filteredRecipes = useMemo(
    () =>
      recipes.filter((r) =>
        r.recipe_name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter, recipes],
  );

  const onCreateNewRecipeBtnClick = () => {
    navigate('new');
  };
  return (
    <div>
      <PageHeader title={'Recipes'}>
        <CreateButton
          onClick={onCreateNewRecipeBtnClick}
          btnText={'Add new recipe'}
        />
      </PageHeader>

      <InputFilter
        type={'text'}
        name={'filter'}
        placeholder="Start enter the recipe name ..."
        filterValue={filter}
        setFilterValue={setFilter}
      />

      {recipes.length === 0 ? (
        <RedirectComponent
          spanText={'There are no recipes yet.'}
          linkText={'Add new recipe'}
          to={'new'}
        />
      ) : (
        <RecipesList recipes={filteredRecipes} />
      )}

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
