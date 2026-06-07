import {
  RecipeInfo,
  Ingredients,
  CookingSteps,
} from '@/features/recipes/components/create-recipe';
import { useState } from 'react';
import {
  Form,
  FormSectionWrapper,
  FormMainSection,
  FormStepsSection,
  PreviewImgWrapper,
} from './RecipeForm.styled';
import { GeneralBtn } from '@/components';
import { FaUtensils } from 'react-icons/fa';
const createIngredient = () => ({
  id: crypto.randomUUID(),
  name: '',
  amount: '',
  unit: 'g',
});
const createStep = () => ({ id: crypto.randomUUID(), text: '' });

const RecipeForm = () => {
  const [recipeForm, setRecipeForm] = useState({
    recipe_name: '',
    cuisine: '',
    cooking_time: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],

    instructions: [createStep(), createStep(), createStep()],

    image_url: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeForm);
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

          {recipeForm.image_url && (
            <PreviewImgWrapper>
              <img
                src={recipeForm.image_url}
                alt={`${recipeForm.recipe_name} image`}
              />
            </PreviewImgWrapper>
          )}
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
