import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { selectUser } from '@/app/redux/auth/selectors';
import { useUpdateRecipe, getRecipeById } from '@/features/recipes/api';
import { PageTitle, BackButton } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  validateRecipeForm,
  prepareRecipeForUpdate,
} from '@/features/recipes/helpers';
import { recipeCategories } from '@/features/recipes/constants';
import { useAppSelector } from '@/app/redux/hooks';

import type { SubmitEvent } from 'react';
import { getErrorMessage } from '@/features/recipes/utils';

import type {
  RecipeFormState,
  FormIngredient,
  Ingredient,
  FormInstruction,
  Instruction,
  Recipe,
  Cuisines,
} from '@/types';

const EditRecipePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [recipeForm, setRecipeForm] = useState<RecipeFormState>({
    recipe_name: '',
    description: '',

    cuisine: '',
    cooking_time: '',
    servings: '',

    image_url: '',

    tips: '',
    tags: [],
    ingredients: [],
    instructions: [],
  });

  const { id: currentUserId } = useAppSelector(selectUser);
  const { recipeId } = useParams();

  const { isFormValid, errors: validationErrors } =
    validateRecipeForm(recipeForm); //Возвращает объект с значением isFormValid=true/false и обьхект ошибок  в полях формы или их отсутствием

  const updateRecipe = useUpdateRecipe();

  useEffect(() => {
    const loadRecipeDetails = async () => {
      if (!recipeId) return;

      try {
        const data: Recipe = await getRecipeById(recipeId);

        setRecipeForm({
          recipe_name: data.recipe_name ?? '',
          description: data.description ?? '',
          cuisine: (data.cuisine as Cuisines) ?? '',
          cooking_time: String(data.cooking_time ?? ''),
          servings: String(data.servings ?? ''),
          image_url: data.image_url ?? '',
          tips: data.tips ?? '',

          ingredients: (data.ingredients ?? []).map(
            (el: Ingredient): FormIngredient => {
              return {
                id: crypto.randomUUID(), // Временный id для работы формы. Используется React как key, а также для поиска,
                // изменения и удаления элементов. На бэкенд этот id не отправляется.
                name: el.name.trim(),
                amount: String(el.amount),
                unit: el.unit,
              };
            },
          ),

          instructions: (data.instructions ?? []).map(
            (el: Instruction, index: number): FormInstruction => {
              return {
                id: crypto.randomUUID(), // Временный id для работы формы. Используется React как key, а также для поиска,
                // изменения и удаления элементов. На бэкенд этот id не отправляется.
                step: index + 1,
                text: el.text.trim(),
              };
            },
          ),

          // В состоянии формы храним только теги, которые пользователь может изменить через чекбоксы. Автоматически вычисляемые теги (difficulty, cuisine) сюда не включаем
          tags: (data.tags ?? []).filter((tag) =>
            recipeCategories.some((category) => category.value === tag),
          ),

          // likes: data.likes, // ❌ нет такого поля в RecipeFormState. Только на бекенде есть.
          // created_at: data.created_at, //❌ нет такого поля в RecipeFormState. Только на бекенде есть.
        });
      } catch (error) {
        console.error(error);
        toast.error('Failed to load recipe.');
        navigate('/recipes');
      }
    };

    if (recipeId) {
      loadRecipeDetails();
    }
  }, [navigate, recipeId]);

  const handleSubmit = async (evt: SubmitEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isSubmitting) return;
    if (!isFormValid) return;

    setError(null);

    try {
      setIsSubmitting(true);
      const recipeToSubmit = prepareRecipeForUpdate(recipeForm);

      await updateRecipe(recipeToSubmit, currentUserId, recipeId);

      toast.success('Your recipe has been successfully editing.');

      navigate(`/recipes/${recipeId}`); //!но при переходе на страницу не отображается уже обновленный рецепт. для этого нужно перезагружать страницу.
    } catch (error) {
      toast.error('Failed to edit the recipe. Please try again.');
      setError(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <PageTitle title={'Make Changes to Your Recipe'} />
      <BackButton />

      <RecipeForm
        recipeForm={recipeForm}
        setRecipeForm={setRecipeForm}
        handleSubmit={handleSubmit}
        currentUserId={currentUserId}
        isSubmitting={isSubmitting}
        isFormValid={isFormValid}
        validationErrors={validationErrors}
        submitButtonText="Save Changes"
      />
    </div>
  );
};

export default EditRecipePage;
