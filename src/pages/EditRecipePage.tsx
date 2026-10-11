import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { selectUser } from '@/app/redux/auth/selectors';
import { uploadRecipeImage } from '@/features/recipes/api';
import { updateRecipe, getRecipeById } from '@/features/recipes/api';
import { PageTitle, BackButton } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  validateRecipeForm,
  prepareRecipeForUpdate,
} from '@/features/recipes/helpers';
import { recipeCategories } from '@/features/recipes/constants';
import { buildImagePath } from '@/features/recipes/helpers';

import { useAppSelector } from '@/app/redux/hooks';

import type { SubmitEvent } from 'react';
import { getErrorMessage } from '@/utils';

import type {
  RecipeFormState,
  FormIngredient,
  Ingredient,
  FormInstruction,
  Instruction,
  Recipe,
  Cuisines,
  RecipeCategoryValue,
} from '@/types';

const EditRecipePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null); //сам файл изображения, который нужно загрузить в Supabase при отправке формы

  const [imagePreviewUrl, setImagePreviewUrl] = useState(''); // URL изображения для отображения превью. Это может быть URL существующего изображения из Supabase или временный blob: URL выбранного локального файла.

  const { isFormValid, errors: validationErrors } = validateRecipeForm(
    recipeForm,
    Boolean(selectedImageFile || recipeForm.image_url), // При редактировании изображение считается выбранным, если есть новый файл или URL изображения, которое уже сохранено у рецепта.
  ); //Возвращает объект с значением isFormValid=true/false и обьхект ошибок  в полях формы или их отсутствием

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
                id: crypto.randomUUID(), // Временный ID нужен для React key и для поиска элемента при редактировании или удалении. В базу данных он не отправляется.
                name: el.name.trim(),
                amount: String(el.amount),
                unit: el.unit,
              };
            },
          ),

          instructions: (data.instructions ?? []).map(
            (el: Instruction, index: number): FormInstruction => {
              return {
                id: crypto.randomUUID(), // Временный ID нужен для React key и для поиска шага при редактировании или удалении. В базу данных он не отправляется.
                text: el.text.trim(),
              };
            },
          ),

          // Оставляем только пользовательские категории, доступные в чекбоксах.
          // Автоматически рассчитываемые теги (например, сложность и кухня) будут заново сформированы при сохранении рецепта.
          tags: (data.tags ?? []).filter((tag): tag is RecipeCategoryValue =>
            recipeCategories.some((category) => category.value === tag),
          ),

          // likes: data.likes, // ❌ нет такого поля в RecipeFormState. Только на бекенде есть.
          // created_at: data.created_at, //❌ нет такого поля в RecipeFormState. Только на бекенде есть.
        });

        // Показываем сохранённое изображение при открытии страницы редактирования.
        // Если пользователь выберет новый файл, превью заменится на изображение этого файла.
        setImagePreviewUrl(data.image_url ?? '');
      } catch (error) {
        console.error('Failed to load recipe:', getErrorMessage(error));
        toast.error('Failed to load the recipe. Please try again.');
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
    if (!recipeId) return;

    try {
      setIsSubmitting(true);

      // По умолчанию используем URL текущего изображения.
      // Если пользователь не выбрал новый файл, старое изображение сохраняется.
      let imageUrl = recipeForm.image_url;

      if (selectedImageFile) {
        // Формируем уникальный путь в Supabase Storage.
        // buildImagePath создаёт только строку пути — загрузку не выполняет.
        const filePath = buildImagePath(currentUserId, selectedImageFile);

        // Загружаем новый файл по подготовленному пути.
        // В ответ получаем публичный URL, который будет сохранён в записи рецепта.
        imageUrl = await uploadRecipeImage(filePath, selectedImageFile);
      }

      // Подготавливаем данные для обновления: очищаем строки, преобразуем числа, пересчитываем сложность и теги, добавляем актуальный URL изображения.
      const recipeToSubmit = prepareRecipeForUpdate(recipeForm, imageUrl);

      await updateRecipe(recipeToSubmit, currentUserId, recipeId);

      toast.success('Recipe updated successfully.');

      navigate(`/recipes/${recipeId}`);
    } catch (error) {
      console.error('Failed to update recipe:', getErrorMessage(error));
      toast.error('Failed to update the recipe. Please try again.');
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
        selectedImageFile={selectedImageFile}
        setSelectedImageFile={setSelectedImageFile}
        imagePreviewUrl={imagePreviewUrl}
        setImagePreviewUrl={setImagePreviewUrl}
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
