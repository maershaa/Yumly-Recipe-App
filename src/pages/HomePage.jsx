import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecipes,
  // selectTags
} from '@/app/redux/recipes/selectors.js';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { RecipesList, TagsFilter } from '@/features/recipes/components';

const HomePage = () => {
  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
