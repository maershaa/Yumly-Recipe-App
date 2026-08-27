import { Cuisines, Ingredient, Instruction, Difficulty } from '@/types';

export type CreateRecipePayload = {
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
  likes: number;
};

export interface UpdateRecipePayload {
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
  updated_at: string;
}
