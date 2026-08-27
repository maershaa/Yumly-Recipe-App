import {
  calculateDifficulty,
  generateRecipeTags,
} from '@/features/recipes/utils';

import { RecipeFormState, UpdateRecipePayload, Cuisines } from '@/types';

export const prepareRecipeForUpdate = (
  formData: RecipeFormState,
): UpdateRecipePayload => {
  const difficultyValue = calculateDifficulty(Number(formData.cooking_time));

  return {
    updated_at: new Date().toISOString(),

    recipe_name: formData.recipe_name.trim(),
    description: formData.description.trim(),
    cuisine: formData.cuisine as Cuisines,
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
    //     Тип ""easy" | "medium" | "hard" | null" не может быть назначен для типа "Difficulty".
    //   Тип "null" не может быть назначен для типа "Difficulty".
    // recipe-payload.ts(35, 3): Ожидаемый тип поступает из свойства "difficulty", объявленного здесь в типе "UpdateRecipePayload"
    tips: formData.tips.trim(),
    tags: generateRecipeTags(
      formData.tags,
      difficultyValue,
      formData.cuisine.trim(),
    ),
  };
};
