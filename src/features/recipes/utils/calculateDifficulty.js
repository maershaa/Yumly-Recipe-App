export const calculateDifficulty = (cookingTime) => {
  if (cookingTime < 30) return 'easy';
  else if (cookingTime > 30 && cookingTime < 50) return 'medium';
  else if (cookingTime > 50) return 'hard';
  else return null;
};
