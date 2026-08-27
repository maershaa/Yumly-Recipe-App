import type { Tables } from '@/types/supabase';

export type Difficulty = 'easy' | 'medium' | 'hard' | null;

export interface Ingredient {
  name: string;
  unit: string;
  amount: number;
}

export interface Instruction {
  step: number;
  text: string;
}

export interface FavoriteRecipe {
  user_id: string;
}

// JSONB-колонки Supabase приходят как generic Json, так как TS не знает их структуру из схемы БД.
// Поэтому мы комбинируем типы: базовые поля таблицы (те что id (число), recipe_name (строка), created_at (строка)) берутся автоматически через Tables<'recipes'>,
// а JSON-поля (ingredients и instructions) мы переопределяем вручную.
export type Recipe = Omit<
  Tables<'recipes'>,
  'ingredients' | 'instructions' | 'difficulty'
> & {
  ingredients: Ingredient[] | null;
  instructions: Instruction[] | null;
  difficulty: Difficulty;
  favorites?: FavoriteRecipe[]; //!пока не понимаю надо ли
};
