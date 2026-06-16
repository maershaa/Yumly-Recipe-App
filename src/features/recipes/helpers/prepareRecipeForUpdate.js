import {
  calculateDifficulty,
  generateRecipeTags,
} from '@/features/recipes/utils';

export const prepareRecipeForUpdate = (formData) => {
  const difficultyValue = calculateDifficulty(Number(formData.cooking_time));

  return {
    updated_at: new Date().toISOString(),

    recipe_name: formData.recipe_name.trim(),
    description: formData.description.trim(),
    cuisine: formData.cuisine.trim(),
    servings: Number(formData.servings) || 1,
    cooking_time: Number(formData.cooking_time),

    image_url: formData.image_url,
    ingredients: formData.ingredients.map((el) => {
      return {
        name: el.name.trim(),
        amount: parseFloat(el.amount),
        unit: el.unit,
      };
    }),

    instructions: formData.instructions.map((el, index) => {
      return {
        step: index + 1,
        text: el.text.trim(),
      };
    }),

    difficulty: difficultyValue,
    tips: formData.tips.trim(),
    tags: generateRecipeTags(difficultyValue),
  };
};
