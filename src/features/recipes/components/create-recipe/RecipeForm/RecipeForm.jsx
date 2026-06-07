import {
  RecipeInfo,
  Ingredients,
  CookingSteps,
} from '@/features/recipes/components/create-recipe';
import { useState } from 'react';

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

    ingredients: [
      {
        id: crypto.randomUUID(),
        name: '',
        amount: '',
        unit: 'g',
      },
    ],

    instructions: [{ id: crypto.randomUUID(), text: '' }],

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
    <form onSubmit={handleSubmit}>
      <h2>RecipeForm</h2>

      <RecipeInfo values={recipeForm} onChange={handleInfoChange} />

      <Ingredients
        ingredients={recipeForm.ingredients}
        onChange={handleIngredientChange}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />

      <CookingSteps
        instructions={recipeForm.instructions}
        onChange={handleStepChange}
        addStep={addStep}
        removeStep={removeStep}
      />

      <button type="submit">Add new recipe</button>
    </form>
  );
};

export { RecipeForm };
