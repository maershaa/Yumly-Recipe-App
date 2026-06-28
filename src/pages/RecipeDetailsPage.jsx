import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RecipeDetailsContent } from '@/features/recipes/components';
import { RecipeDetailsSkeleton } from '@/components';
import { getRecipeById } from '@/features/recipes/api';
import { toast } from 'sonner';

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadRecipeDetails = async (id) => {
      const toastId = toast.loading('Loading...'); //Создаем тост загрузки и сохраняем его ID
      setLoading(true);

      try {
        const data = await getRecipeById(id);
        setRecipe(data);

        toast.dismiss(toastId); //Убираем тост загрузки при успехе
      } catch (error) {
        toast.error(`Error: ${error.message}`, { id: toastId }); // Обновляем тост загрузки на статус ошибки
      } finally {
        setLoading(false);
      }
    };

    if (recipeId) {
      loadRecipeDetails(recipeId);
    }
  }, [recipeId]);

  // Показываем скелетон пока у нас идет загрузка и еще нет данных рецепта
  if (loading && !recipe) {
    return <RecipeDetailsSkeleton />;
  }

  // если рецепт === null перенаправляем на страницу NotFound
  if (!recipe) {
    navigate('*');
    return;
  }

  return (
    <div>
      <nav>
        <Link to={'/'}>Home {' > '} </Link>
        <Link to={'/recipes'}>Recipes {' > '} </Link>
        <Link to={`/recipes/${recipeId}`}>{recipe.recipe_name}</Link>
      </nav>

      <RecipeDetailsContent recipe={recipe} setRecipe={setRecipe} />
    </div>
  );
};

export default RecipeDetailsPage;
