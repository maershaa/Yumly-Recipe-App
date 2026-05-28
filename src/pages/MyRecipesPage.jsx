import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/selectors.js';
import { useEffect } from 'react';
import { fetchRecipes } from '@/app/redux/operations';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <h1
        style={{
          marginBottom: '20px',
        }}
      >
        MyRecipesPage
      </h1>
      <ul style={{ display: 'flex', columnGap: '20px' }}>
        {recipes.map((receipt) => (
          <li
            key={receipt.id}
            style={{ border: '1px solid pink', padding: '20px' }}
          >
            <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>
              {receipt.name}
            </h2>
            <h3>Список ингредиентов:</h3>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
                marginBottom: '20px',
              }}
            >
              {receipt.ingredients.map((ingredient) => (
                <li key={ingredient.item}>
                  <span>{ingredient.item}</span>
                  <span>{ingredient.quantity}</span>
                </li>
              ))}
            </ul>
            <h3
              style={{
                marginTop: '20px',
              }}
            >
              Cпособ приготовления:
            </h3>
            <p>{receipt.recipe}</p>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default MyRecipesPage;
