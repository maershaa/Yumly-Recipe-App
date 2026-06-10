import {
  calculateDifficulty,
  generateRecipeTags,
} from '@/features/recipes/utils';

export const prepareRecipeForSave = (formData) => {
  const difficultyValue = calculateDifficulty(Number(formData.cooking_time));

  return {
    ...formData,

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

    calories: null,
    difficulty: difficultyValue,
    likes: 0,

    tags: generateRecipeTags(formData.cuisine, difficultyValue),
  };
};
