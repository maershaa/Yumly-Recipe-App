import type { Cuisines, RecipeCategoryValue } from '@/types';
import type { ChangeEvent, FocusEvent } from 'react';

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
  tags: RecipeCategoryValue[];
  tips: string;
}

export interface RecipeFormErrors {
  recipe_name: string;
  description: string;
  cuisine: string;
  cooking_time: string;
  servings: string;
  image_url: string;
  tips: string;
  ingredients: string;
  instructions: string;
}

export type RecipeFormTouched = Record<
  | 'recipe_name'
  | 'description'
  | 'cuisine'
  | 'cooking_time'
  | 'servings'
  | 'image_url'
  | 'tips',
  boolean
>;

export type RecipeFormTabsId = 'generalInfo' | 'ingredients' | 'cooking';
export type RecipeFormTabsLabel =
  | 'Basic Info'
  | 'Ingredients'
  | 'Cooking Steps';

// Общие типы событий для полей формы рецепта — используются
// во всех дочерних компонентах формы (RecipeForm, RecipeInfo, Ingredients, CookingSteps...)
export type FieldChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export type FieldBlurEvent = FocusEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
