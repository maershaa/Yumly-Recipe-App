/*
  ============================
  Алгоритм валидации формы
  ============================

  1. FIELD VALIDATION
  --------------------
  Для каждого поля создаётся отдельная функция проверки:

  - validateRecipeName
  - validateCuisine
  - validateCookingTime
  - validateIngredients
  - validateInstructions
  - etc.

  Каждая функция:
  - принимает значение поля
  - очищает (trim)
  - проверяет правило (length, number, required)
  - возвращает true / false


  2. FORM VALIDATION (validateRecipeForm)
  ---------------------------------------
  Общая функция, которая вызывает все проверки полей.

  Возвращает объект:

  {
    isFormValid: boolean,
    errors: {
      recipe_name: 'error message' | '',
      description: 'error message' | '',
      ...
    }
  }

  - isFormValid = итоговая валидность формы
  - errors = текстовые ошибки для UI


  3. TOUCHED STATE (UX CONTROL)
  ------------------------------
  Используется для управления отображением ошибок:

  const FORM_FIELDS = {
    recipe_name: false,
    description: false,
    cuisine: false,
    cooking_time: false,
    servings: false,
    image_url: false,
    tips: false,
  };

  const [isTouched, setIsTouched] = useState(FORM_FIELDS);

  handleInputBlur:
  - срабатывает при потере фокуса (onBlur)
  - отмечает поле как "touched"

  const handleInputBlur = (e) => {
    const name = e.currentTarget.name;

    setIsTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };


  4. RENDER LOGIC (WHEN TO SHOW ERROR)
  -------------------------------------
  Ошибка показывается только если:

  isTouched.field === true && errors.field !== ''
*/

const validateRecipeName = (recipeName) => recipeName?.trim().length >= 3;

const validateCuisine = (cuisine) => cuisine !== '';

const validateCookingTime = (cookingTime) => Number(cookingTime) > 0;

const validateIngredients = (ingredients) =>
  ingredients.length >= 3 &&
  ingredients.every(
    (ingredient) => ingredient.name.trim() && Number(ingredient.amount) > 0,
  );

const validateInstructions = (instructions) =>
  instructions.length >= 3 &&
  instructions.every((step) => step.text.trim().length > 0);

const validateDescription = (description) => description.trim().length >= 5;

const validateServings = (servings) => Number(servings) > 0;

const validateImage_url = (image_url) => image_url.trim() !== '';

const validateTips = (tips) => tips.trim().length >= 10;

export const validateRecipeForm = (form) => {
  const recipeNameValid = validateRecipeName(form.recipe_name);
  const cuisineValid = validateCuisine(form.cuisine);
  const cookingTimeValid = validateCookingTime(form.cooking_time);
  const ingredientsValid = validateIngredients(form.ingredients);
  const instructionsValid = validateInstructions(form.instructions);
  const descriptionValid = validateDescription(form.description);
  const servingsValid = validateServings(form.servings);
  const imageValid = validateImage_url(form.image_url);
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

      image: !imageValid ? 'Please add an image.' : '',

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
