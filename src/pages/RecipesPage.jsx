import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '@/app/redux/recipes/selectors.js';
import { selectTags } from '@/app/redux/tags/selectors';
import { fetchRecipes } from '@/app/redux/recipes/operations';
import { fetchTags } from '@/app/redux/tags/operations';

import { RecipesList, TagsFilter } from '@/features/recipes/components';

const RecipesPage = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const recipes = useSelector(selectRecipes);
  const tags = useSelector(selectTags);
  const dispatch = useDispatch();

  // const uniqueTagsHardVariant = useMemo(
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

  const uniqueTags = useMemo(
    () => [...new Set(tags.flatMap((el) => el.tags ?? []))], //Если el.tags равно null или undefined, то возьми пустой массив []
    [tags], //! как у меня 2 ukranian?
  );

  useEffect(() => {
    dispatch(fetchRecipes());

    dispatch(fetchTags());
  }, [dispatch]);

  const filteredRecipes = useMemo(() => {
    if (!selectedTag || selectedTag === 'all') return recipes;

    return recipes.filter((recipe) => recipe.tags?.includes(selectedTag));
  }, [selectedTag, recipes]);
  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <h1>Recipes Page</h1>

      <TagsFilter
        tags={uniqueTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      <RecipesList recipes={filteredRecipes} />
    </div>
  );
};

export default RecipesPage;
