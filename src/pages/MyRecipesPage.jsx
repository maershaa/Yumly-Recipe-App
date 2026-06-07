import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/recipes/selectors.js';
import { useEffect, useState } from 'react';
// import { fetchRecipes } from '@/app/redux/recipes/operations';
import {
  RecipesList,
  PageHeader,
  InputFilter,
} from '@/features/recipes/components';
import { AddBtn, RedirectComponent } from '@/components';

const MyRecipesPage = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(fetchRecipes());
  }, [dispatch]);

  const onCreateNewRecipeBtnClick = () => {
    navigate('new');
  };
  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <PageHeader title={'Recipes'}>
        <AddBtn
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

      {recipes.length > 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <RedirectComponent
          spanText={'There are no recipes yet.'}
          linkText={'Add new recipe'}
          to={'new'}
        />
      )}

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
