import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RecipeDetailsContent } from '@/features/recipes/components';
import { getRecipeById } from '@/features/recipes/api';

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const loadRecipeDetails = async (id) => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.log(error.message); //!а что мы с этим можем сделать на продакшен?
      }
    };

    if (recipeId) {
      loadRecipeDetails(recipeId);
    }
  }, [recipeId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <nav>
        <Link to={'/'}>Home {' > '} </Link>
        <Link to={'/recipes'}>Recipes {' > '} </Link>
        <Link to={`/recipes/${recipeId}`}>{recipe.recipe_name}</Link>
      </nav>

      <RecipeDetailsContent recipe={recipe} />
    </div>
  );
};

export default RecipeDetailsPage;
