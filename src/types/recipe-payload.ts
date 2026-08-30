import type { Cuisines, Ingredient, Instruction, Difficulty } from '@/types';

interface RecipeBasePayload {
  recipe_name: string;
  description: string;
  cuisine: Cuisines;
  cooking_time: number;
  servings: number;
  image_url: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  tips: string;
  difficulty: Difficulty;
}

export interface CreateRecipePayload extends RecipeBasePayload {
  likes: number;
}

export interface UpdateRecipePayload extends RecipeBasePayload {
  updated_at: string;
}
