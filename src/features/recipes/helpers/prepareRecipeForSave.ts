import {
  calculateDifficulty,
  generateRecipeTags,
} from '@/features/recipes/utils';

import type { RecipeFormState, CreateRecipePayload, Cuisines } from '@/types';

export const prepareRecipeForSave = (
  formData: RecipeFormState,
): CreateRecipePayload => {
  const difficultyValue = calculateDifficulty(Number(formData.cooking_time));

  return {
    ...formData, //надо ли?
    recipe_name: formData.recipe_name.trim(),
    description: formData.description.trim(),
    cuisine: formData.cuisine as Cuisines,
    servings: Number(formData.servings) || 1,
    cooking_time: Number(formData.cooking_time),

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

    likes: 0,
    tips: formData.tips.trim(),

    tags: generateRecipeTags(
      formData.tags,
      difficultyValue,
      formData.cuisine.trim(),
    ),
  };
};
