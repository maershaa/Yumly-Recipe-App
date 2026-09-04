import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { createRecipe } from '@/features/recipes/api';
import { selectUser } from '@/app/redux/auth/selectors';
import { PageTitle, BackButton } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  createIngredient,
  createStep,
  prepareRecipeForSave,
  validateRecipeForm,
} from '@/features/recipes/helpers';
import { useAppSelector } from '@/app/redux/hooks';
import { getErrorMessage } from '@/utils';

import type { RecipeFormState } from '@/types';
import type { SubmitEvent } from 'react';

const CreateRecipePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id: currentUserId } = useAppSelector(selectUser);

  const createInitialFormState = (): RecipeFormState => ({
    ///мы делаем функцию createInitialFormState а не обьект потому что После очистки формы создаются новые UUID в createIngredient и createStep
    recipe_name: '',
    description: '',

    cuisine: '',
    cooking_time: '',
    servings: '',

    tags: [],
    image_url: '',

    tips: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],
    instructions: [createStep(), createStep(), createStep()],
  });

  const [recipeForm, setRecipeForm] = useState<RecipeFormState>(
    createInitialFormState,
  ); //Это Lazy Initial State. React сам вызовет функцию только один раз при первом рендере

  const { isFormValid, errors: validationErrors } =
    validateRecipeForm(recipeForm); //Возвращает объект с значением isFormValid=true/false и обьхект ошибок  в полях формы или их отсутствием

  const navigate = useNavigate();

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid || isSubmitting) return;

    try {
      setIsSubmitting(true);

      const recipeToSubmit = prepareRecipeForSave(recipeForm);

      await createRecipe(recipeToSubmit, currentUserId);

      toast.success('Your recipe has been created.');
      resetForm();
      navigate('/my-recipes');
    } catch (error) {
      console.error('Failed to create recipe:', getErrorMessage(error));
      toast.error('Failed to create the recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRecipeForm(createInitialFormState());
  };

  return (
    <div>
      <PageTitle title={'New homemade recipe'} />
      <BackButton />

      <RecipeForm
        recipeForm={recipeForm}
        setRecipeForm={setRecipeForm}
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
