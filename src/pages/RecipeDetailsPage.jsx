import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { RecipeDetailsContent } from '@/features/recipes/components';

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*') //забираем все поля рецепта
          .eq('id', recipeId) //фильтруем строки, где id строго равен recipeId
          .single(); //ожидаю ровно одну запись, не массив

        if (error) throw error;

        setRecipe(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (recipeId) {
      fetchRecipe();
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
