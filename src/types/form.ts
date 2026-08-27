import type { Cuisines } from '@/types';

export interface FormIngredient {
  id: string;
  name: string;
  unit: string;
  amount: string;
}

export interface FormInstruction {
  id: string;
  text: string;
}

export interface RecipeFormState {
  recipe_name: string;
  description: string;
  cuisine: Cuisines | ''; //распространённая модель для select в формах
  cooking_time: string;
  servings: string;
  image_url: string;
  ingredients: FormIngredient[];
  instructions: FormInstruction[];
  tags: string[];
  tips: string;
}
