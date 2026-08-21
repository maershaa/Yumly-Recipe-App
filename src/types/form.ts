import type { Cuisines } from '@/types';

export interface FormIngredient {
  id: string;
  name: string;
  unit: string;
  amount: string;
}

export interface FormInstructions {
  id: string;
  text: string;
}

export interface RecipeForm {
  recipe_name: string;
  description: string;
  cuisine: Cuisines[];
  cooking_time: number;
  servings: number;
  image_url: string;
  ingredients: FormIngredient[];
  instructions: FormInstructions[];

  tags: string[];
  tips: string;
}
