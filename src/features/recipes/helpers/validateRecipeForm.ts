import type {
  Cuisines,
  RecipeFormState,
  FormIngredient,
  FormInstruction,
  RecipeFormErrors,
} from '@/types';

/*
  ============================
  Алгоритм валидации формы
  ============================

  1. FIELD VALIDATION
  -------------------
  Для каждого поля есть отдельная функция проверки.
  Каждая функция получает значение поля и возвращает true или false,
  в зависимости от того, соответствует ли значение заданным правилам.

  trim() используется там, где необходимо игнорировать пробелы
  в начале и конце строки.

  2. FORM VALIDATION
  ------------------
  validateRecipeForm вызывает все проверки полей и объединяет результаты.

  Возвращает:
  - isFormValid — true, если все поля прошли валидацию;
  - errors — объект с сообщениями об ошибках для отображения в UI.
    Если поле прошло проверку, его сообщение об ошибке — пустая строка.

  3. IMAGE VALIDATION
  -------------------
  Проверяем наличие изображения, а не только form.image_url.

  При выборе нового файла он хранится отдельно в selectedImageFile.
  Временный URL для превью также не записывается в form.image_url.

  Поэтому hasImage должен учитывать:
  - выбран ли новый файл;
  - есть ли уже сохранённый URL изображения при редактировании рецепта.

  Сам файл загружается в Supabase только при отправке формы.

  4. TOUCHED STATE
  ----------------
  Отдельное состояние touched позволяет показывать ошибку поля
  только после взаимодействия пользователя с этим полем.

  Например:
  isTouched.recipe_name === true && errors.recipe_name !== ''

  Валидация определяет, корректны ли данные.
  Touched state определяет, когда показывать ошибку пользователю.
*/

interface ValidationErrorsType {
  isFormValid: boolean;
  errors: RecipeFormErrors;
}

const validateRecipeName = (recipeName: string): boolean =>
  recipeName?.trim().length >= 3;

const validateCuisine = (cuisine: Cuisines | ''): boolean => cuisine !== '';

const validateCookingTime = (cookingTime: string): boolean =>
  Number(cookingTime) > 0;

const validateIngredients = (ingredients: FormIngredient[]): boolean =>
  ingredients.length >= 3 &&
  ingredients.every(
    (ingredient) => ingredient.name.trim() && Number(ingredient.amount) > 0,
  );

const validateInstructions = (instructions: FormInstruction[]) =>
  instructions.length >= 3 &&
  instructions.every((step) => step.text.trim().length > 0);

const validateDescription = (description: string): boolean =>
  description.trim().length >= 5;

const validateServings = (servings: string): boolean => Number(servings) > 0;

// Проверяем, есть ли изображение для рецепта.
// hasImage учитывает новый выбранный файл при создании рецепта и новый файл или существующий URL при редактировании.
// Сам файл загружается в Supabase только после отправки формы.
const validateImage = (hasImage: boolean): boolean => hasImage;

const validateTips = (tips: string): boolean => tips.trim().length >= 10;

export const validateRecipeForm = (
  form: RecipeFormState,
  hasImage: boolean,
): ValidationErrorsType => {
  const recipeNameValid = validateRecipeName(form.recipe_name);
  const cuisineValid = validateCuisine(form.cuisine);
  const cookingTimeValid = validateCookingTime(form.cooking_time);
  const ingredientsValid = validateIngredients(form.ingredients);
  const instructionsValid = validateInstructions(form.instructions);
  const descriptionValid = validateDescription(form.description);
  const servingsValid = validateServings(form.servings);

  // Проверяем наличие изображения независимо от того, хранится ли оно как новый файл или уже сохранено в Supabase.
  const imageValid = validateImage(hasImage);

  const tipsValid = validateTips(form.tips);

  const isFormValid =
    recipeNameValid &&
    cuisineValid &&
    cookingTimeValid &&
    ingredientsValid &&
    instructionsValid &&
    descriptionValid &&
    servingsValid &&
    imageValid &&
    tipsValid;

  const validationsResults = {
    isFormValid,
    errors: {
      recipe_name: !recipeNameValid
        ? 'Title must be at least 3 characters long.'
        : '',

      description: !descriptionValid
        ? 'Description must be at least 5 characters long.'
        : '',

      cuisine: !cuisineValid ? 'Please choose a cuisine.' : '',

      cooking_time: !cookingTimeValid ? 'Please add the cooking time.' : '',

      servings: !servingsValid ? 'Please specify the number of servings.' : '',

      image_url: !imageValid ? 'Please add an image.' : '',

      tips: !tipsValid ? 'Please add a tip.' : '',

      ingredients: !ingredientsValid
        ? 'Please add at least 3 ingredients with their amounts and units.'
        : '',

      instructions: !instructionsValid
        ? 'Please add at least 3 cooking steps.'
        : '',
    },
  };

  return validationsResults;
};
