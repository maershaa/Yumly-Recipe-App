import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecipes,
  // selectTags
} from '@/app/redux/recipes/selectors.js';
import { fetchRecipes, fetchTags } from '@/app/redux/recipes/operations';
import { RecipesList, TagsFilter } from '@/features/recipes/components';

const HomePage = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const recipes = useSelector(selectRecipes);
  //const tags = useSelector(selectTags); //! разобраться целесообразно ли оно?
  const dispatch = useDispatch();

  //! разобраться целесообразно ли оно?
  // const uniqueTags = useMemo(
  //   () =>
  //     tags
  //       .filter((tagEl) => tagEl?.tags)
  //       .reduce((acc, nextTag) => {
  //         nextTag.tags.forEach((tag) => {
  //           if (acc.includes(tag)) {
  //             return acc;
  //           } else {
  //             acc.push(tag);
  //           }
  //         });
  //         return acc;
  //       }, []),
  //   [tags],
  // );

  // ! или лучше так
  const uniqueTags = useMemo(() => {
    return recipes
      .filter((el) => el?.tags)
      .map((recipe) => recipe.tags)
      .reduce((acc, nextTag) => {
        nextTag.forEach((tag) => {
          if (acc.includes(tag)) {
            return acc;
          } else {
            acc.push(tag);
          }
        });
        return acc;
      }, []);
  }, [recipes]);

  useEffect(() => {
    dispatch(fetchRecipes());

    dispatch(fetchTags());
  }, [dispatch]);

  const filteredRecipes = useMemo(() => {
    if (!selectedTag) return recipes;

    return recipes.filter((recipe) => recipe.tags?.includes(selectedTag));
  }, [selectedTag, recipes]);

  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <h1>Home Page</h1>

      <TagsFilter
        tags={uniqueTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      <RecipesList recipes={filteredRecipes} />
    </div>
  );
};

export default HomePage;
