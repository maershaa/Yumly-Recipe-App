export const isFormValid = (recipeForm) => {
  const titleValid = recipeForm.recipe_name.trim().length >= 3;
  const cuisineValid = recipeForm.cuisine !== '';
  const cookingTimeValid = Number(recipeForm.cooking_time) > 0;

  const ingredientsValid =
    recipeForm.ingredients.length >= 3 &&
    recipeForm.ingredients.every(
      (ingredient) => ingredient.name.trim() && Number(ingredient.amount) > 0,
    );

  const instructionsValid =
    recipeForm.instructions.length >= 3 &&
    recipeForm.instructions.every((step) => step.text.trim().length > 0);

  const descriptionValid = recipeForm.description.trim().length >= 20;

  const servingsValid = Number(recipeForm.servings) > 0;

  const imageValid = recipeForm.image_url.trim() !== '';

  const tipsValid = recipeForm.tips.trim().length >= 10;

  return (
    titleValid &&
    descriptionValid &&
    cuisineValid &&
    cookingTimeValid &&
    servingsValid &&
    imageValid &&
    tipsValid &&
    ingredientsValid &&
    instructionsValid
  );
};
