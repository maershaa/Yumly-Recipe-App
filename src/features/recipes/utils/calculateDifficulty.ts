import type { Difficulty } from '@/types';

export const calculateDifficulty = (cookingTime: number): Difficulty => {
  if (cookingTime <= 30) return 'easy';
  else if (cookingTime > 30 && cookingTime <= 50) return 'medium';
  return 'hard';
};
