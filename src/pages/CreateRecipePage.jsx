import { useState } from 'react';
import { useSelector } from 'react-redux';

import { PageTitle } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  createIngredient,
  createStep,
  prepareRecipeForSave,
} from '@/features/recipes/helpers';
import { selectUser } from '@/app/redux/auth/selectors';

import { useCreateRecipe } from '@/features/recipes/api';
import { isFormValid } from '@/features/recipes/helpers';

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
  const isValid = isFormValid(recipeForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return; //Если каждая переменная которая вернется из isFormValid === true то функция в целом вернет true

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const recipeToSubmit = prepareRecipeForSave(recipeForm);

      await createRecipe(recipeToSubmit, currentUserId);

      resetForm();
    } catch (error) {
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

      <RecipeForm
        recipeForm={recipeForm}
        setRecipeForm={setRecipeForm}
        createInitialFormState={createInitialFormState}
        handleSubmit={handleSubmit}
        currentUserId={currentUserId}
        isSubmitting={isSubmitting}
        isValid={isValid}
        submitButtonText="Create Recipe"
      />
    </div>
  );
};

export default CreateRecipePage;
