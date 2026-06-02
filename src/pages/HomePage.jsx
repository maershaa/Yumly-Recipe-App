import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/recipes/selectors.js';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { RecipesList } from '@/features/recipes/components';

const HomePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const tags = ['easy', 'hard', 'healthy'];

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const onTagFilter = (query) => {
    console.log(query);
  };

  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <h1>Home Page</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <button type="button" onClick={onTagFilter}>
              {tag.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default HomePage;
