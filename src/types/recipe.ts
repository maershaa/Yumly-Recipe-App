export interface Ingredient {
  name: string;
  unit: string;
  amount: number;
}

export interface Instructions {
  step: number;
  text: string;
}

export interface FavoriteRecipe {
  user_id: string;
}

export interface Recipe {
  id: number;
  created_at: string;
  recipe_name: string;
  ingredients: Ingredient[];
  user_id: string;
  image_url: string;
  cuisine: string;
  difficulty: string;
  cooking_time: number;
  likes: number;
  tags: string[];
  updated_at: string;
  instructions: Instructions[];
  description: string;
  servings: number;
  tips: string;
  favorites?: FavoriteRecipe[];
}

export type MainTagsValue =
  | 'all'
  | 'italian'
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'easy'
  | 'medium'
  | 'hard'
  | 'healthy'
  | 'vegetarian'
  | 'dessert';

export type recipeCategoriesValue =
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'healthy'
  | 'vegan'
  | 'dessert';
