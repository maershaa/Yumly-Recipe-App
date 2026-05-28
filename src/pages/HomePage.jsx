import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/selectors.js';
import { fetchRecipes } from '@/app/redux/operations';
import { RecipesList } from '@/features/recipes/components';

/* created_at: '2026-05-28T13:52:10.752538+00:00';
id: 1;
ingredients: (3)[('Chicken', 'Pasta', 'Cream')];
instructions: 'Cook pasta and chicken';
recipe_name: 'Chicken Pasta';
user_id: 'f2860a16-30ea-449b-b305-a9f819bb0641'; */

const HomePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const tags = ['easy', 'hard', 'healthy'];

  // const [data, setData] = useState(recipes);

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
