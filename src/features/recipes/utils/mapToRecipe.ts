import type { Tables } from '@/types/supabase';
import type {
  Recipe,
  Ingredient,
  Instruction,
  Difficulty,
  FavoriteRecipe,
} from '@/types';

// Тип строки, которую реально возвращает Supabase для таблицы recipes.
// Дополнительно добавляем необязательное поле favorites потому что оно приходит только когда в запросе есть join с таблицей favorites,
// а сам Tables<'recipes'> про этот join ничего не знает.
type RecipeRow = Tables<'recipes'> & { favorites?: FavoriteRecipe[] };

// Supabase не знает точную структуру JSONB-колонок ingredients и instructions, поэтому в RecipeRow они имеют общий тип Json | null.
// Функция превращает сырую строку из базы данных (RecipeRow) в доменную модель приложения (Recipe), где эти поля уже имеют конкретный тип: Ingredient[] | null и Instruction[] | null.
export const mapToRecipe = (row: RecipeRow): Recipe => ({
  // Копируем все остальные поля без изменений (id, recipe_name, created_at и т.д.),
  // они одинаковые и в RecipeRow, и в Recipe.
  ...row,

  // TypeScript не может напрямую превратить Json в Ingredient[],потому что это разные типы и не связаны друг с другом.Поэтому сначала приводим к unknown, а затем к нужному типу.
  // Само значение при этом не проверяется и не меняется в рантайме — мы просто говорим TypeScript "здесь точно массив ингредиентов".
  ingredients: row.ingredients as unknown as Ingredient[] | null,

  instructions: row.instructions as unknown as Instruction[] | null,

  difficulty: row.difficulty as Difficulty,
});
