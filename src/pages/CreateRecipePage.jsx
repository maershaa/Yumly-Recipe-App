import { useState } from 'react';
import { useSelector } from 'react-redux';

import { PageTitle, BackButton } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  createIngredient,
  createStep,
  prepareRecipeForSave,
} from '@/features/recipes/helpers';
import { selectUser } from '@/app/redux/auth/selectors';
import { toast } from 'sonner';
import { useCreateRecipe } from '@/features/recipes/api';
import { validateRecipeForm } from '@/features/recipes/helpers';
import { useNavigate } from 'react-router-dom';

const CreateRecipePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id: currentUserId } = useSelector(selectUser);

  const createRecipe = useCreateRecipe(); // мой хук который достает функцию createRecipe которая готовит на основе формы обьект для отправки на бекенд
  const createInitialFormState = () => ({
    ///мы делаем функцию createInitialFormState а не обьект потому что После очистки формы создаются новые UUID в createIngredient и createStep
    recipe_name: '',
    description: '',

    cuisine: '',
    cooking_time: '',
    servings: '',

    image_url: '',

    tips: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],
    instructions: [createStep(), createStep(), createStep()],
  });

  const [recipeForm, setRecipeForm] = useState(createInitialFormState); //Это Lazy Initial State. React сам вызовет функцию только один раз при первом рендере
  const { isFormValid, errors: validationErrors } =
    validateRecipeForm(recipeForm); //Возвращает объект с значением isFormValid=true/false и обьхект ошибок  в полях формы или их отсутствием
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const recipeToSubmit = prepareRecipeForSave(recipeForm);

      await createRecipe(recipeToSubmit, currentUserId);
      toast.success('Your recipe has been created.');
      resetForm();
      navigate('/my-recipes');
    } catch (error) {
      toast.error('Failed to create the recipe. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRecipeForm(createInitialFormState());
  };

  return (
    <div>
      <PageTitle title={'Add Recipe'}> </PageTitle>
      <BackButton />

      <RecipeForm
        recipeForm={recipeForm}
        setRecipeForm={setRecipeForm}
        createInitialFormState={createInitialFormState}
        handleSubmit={handleSubmit}
        currentUserId={currentUserId}
        isFormValid={isFormValid}
        isSubmitting={isSubmitting}
        validationErrors={validationErrors}
        submitButtonText="Create Recipe"
      />
    </div>
  );
};

export default CreateRecipePage;
