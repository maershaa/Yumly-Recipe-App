import { PageTitle, BackButton } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  isFormValid,
  prepareRecipeForUpdate,
} from '@/features/recipes/helpers';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectUser } from '@/app/redux/auth/selectors';
import { useUpdateRecipe, getRecipeById } from '@/features/recipes/api';

const EditRecipePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [recipeForm, setRecipeForm] = useState({
    recipe_name: '',
    description: '',

    cuisine: '',
    cooking_time: '',
    servings: '',

    image_url: '',

    tips: '',

    ingredients: [],
    instructions: [],
  });

  const { id: currentUserId } = useSelector(selectUser);
  const { recipeId } = useParams();

  const isValid = isFormValid(recipeForm);

  const updateRecipe = useUpdateRecipe();

  useEffect(() => {
    const loadRecipeDetails = async (id) => {
      try {
        const data = await getRecipeById(id);
        setRecipeForm({
          recipe_name: data.recipe_name,
          description: data.description,

          cuisine: data.cuisine,
          cooking_time: data.cooking_time,
          servings: data.servings,

          image_url: data.image_url,

          tips: data.tips,

          ingredients: data.ingredients.map((el) => {
            return {
              id: crypto.randomUUID(), // Временный id для работы формы. Используется React как key, а также для поиска,
              // изменения и удаления элементов. На бэкенд этот id не отправляется.
              amount: parseFloat(el.amount),
              unit: el.unit,
            };
          }),

          instructions: data.instructions.map((el, index) => {
            return {
              id: crypto.randomUUID(), // Временный id для работы формы. Используется React как key, а также для поиска,
              // изменения и удаления элементов. На бэкенд этот id не отправляется.
              step: index + 1,
              text: el.text.trim(),
            };
          }),

          likes: data.likes,
          created_at: data.created_at,
        });
      } catch (error) {
        console.log(error.message); //!а что мы с этим можем сделать на продакшен?
      }
    };

    if (recipeId) {
      loadRecipeDetails(recipeId);
    }
  }, [recipeId]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!isValid) return;
    if (isSubmitting) return;

    setError(null);

    try {
      setIsSubmitting(true);
      const recipeToSubmit = prepareRecipeForUpdate(recipeForm);

      await updateRecipe(recipeToSubmit, currentUserId, recipeId);

      navigate(`/recipes/${recipeId}`); //!но при переходе на страницу не отображается уже обновленный рецепт. для этого нужно перезагружать страницу.
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <PageTitle title={'Edit Recipe'}> </PageTitle>
      <BackButton />

      <RecipeForm
        recipeForm={recipeForm}
        setRecipeForm={setRecipeForm}
        handleSubmit={handleSubmit}
        currentUserId={currentUserId}
        isSubmitting={isSubmitting}
        isValid={isValid}
        submitButtonText="Save Changes"
        error={error}
      />
    </div>
  );
};

export default EditRecipePage;
