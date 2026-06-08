import { useCallback, useState } from 'react';
import {
  RecipeInfo,
  Ingredients,
  CookingSteps,
} from '@/features/recipes/components/create-recipe';
import { GeneralBtn } from '@/components';
import {
  Form,
  FormSectionWrapper,
  FormMainSection,
  FormStepsSection,
} from './RecipeForm.styled';
import { FaUtensils } from 'react-icons/fa';
import { supabase } from '../../../../../../supabaseClient';
import { useSelector } from 'react-redux';

import { selectUserId } from '@/app/redux/auth/selectors';

const createIngredient = () => ({
  id: crypto.randomUUID(), //!Обязательно. чтобы БД знала к какому пользователю закрепить рецепт
  name: '',
  amount: '',
  unit: 'g',
});

const createStep = () => ({ id: crypto.randomUUID(), text: '' });

const RecipeForm = () => {
  const currentUserId = useSelector(selectUserId);

  const [recipeForm, setRecipeForm] = useState({
    user_id: currentUserId,
    recipe_name: '',
    cuisine: '',
    cooking_time: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],

    instructions: [createStep(), createStep(), createStep()],

    image_url: '',
  });

  const createRecipe = useCallback(async (newRecipe) => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .insert(newRecipe)
        .select();

      if (error) throw error;
      console.log('🚀 ~ Recipe successfully created:', data);
      return data;
    } catch (e) {
      console.error('Error creating recipe:', e.message);
      throw e;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipeForm);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleIngredientChange = (id, e) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: prevValue.ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [name]: value } : ingredient,
      ),
    }));
  };

  const handleStepChange = (id, e) => {
    const { value } = e.target;

    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: prevValue.instructions.map((step) =>
        step.id === id ? { ...step, text: value } : step,
      ),
    }));
  };

  const addIngredient = () => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: [...prevValue.ingredients, createIngredient()],
    }));
  };

  const addStep = () => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: [...prevValue.instructions, createStep()],
    }));
  };

  const removeIngredient = (id) => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: prevValue.ingredients.filter(
        (ingredient) => ingredient.id !== id,
      ),
    }));
  };

  const removeStep = (id) => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: prevValue.instructions.filter((step) => step.id !== id),
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormMainSection>
        <FormSectionWrapper>
          <RecipeInfo values={recipeForm} onChange={handleInfoChange} />
        </FormSectionWrapper>
        <FormSectionWrapper>
          <Ingredients
            ingredients={recipeForm.ingredients}
            onChange={handleIngredientChange}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
          />
        </FormSectionWrapper>
      </FormMainSection>

      <FormStepsSection>
        <FormSectionWrapper>
          <CookingSteps
            instructions={recipeForm.instructions}
            onChange={handleStepChange}
            addStep={addStep}
            removeStep={removeStep}
          />
        </FormSectionWrapper>

        <GeneralBtn type="submit" variant="submit">
          <FaUtensils />
          Create Recipe
        </GeneralBtn>
      </FormStepsSection>
    </Form>
  );
};

export { RecipeForm };
