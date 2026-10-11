import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { createRecipe, uploadRecipeImage } from '@/features/recipes/api';
import { selectUser } from '@/app/redux/auth/selectors';
import { PageTitle, BackButton } from '@/components';
import { RecipeForm } from '@/features/recipes/components';
import {
  createIngredient,
  createStep,
  prepareRecipeForSave,
  validateRecipeForm,
} from '@/features/recipes/helpers';
import { useAppSelector } from '@/app/redux/hooks';
import { getErrorMessage } from '@/utils';
import { buildImagePath } from '@/features/recipes/helpers';

import type { RecipeFormState } from '@/types';
import type { SubmitEvent } from 'react';

const CreateRecipePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id: currentUserId } = useAppSelector(selectUser);

  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null); //сам файл изображения, который нужно загрузить в Supabase при отправке формы

  const [imagePreviewUrl, setImagePreviewUrl] = useState(''); //временный URL изображения, который позволяет сразу показать превью изображения.

  const createInitialFormState = (): RecipeFormState => ({
    ///мы делаем функцию createInitialFormState а не обьект потому что После очистки формы создаются новые UUID в createIngredient и createStep
    recipe_name: '',
    description: '',

    cuisine: '',
    cooking_time: '',
    servings: '',

    tags: [],
    image_url: '',

    tips: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],
    instructions: [createStep(), createStep(), createStep()],
  });

  const [recipeForm, setRecipeForm] = useState<RecipeFormState>(
    createInitialFormState,
  ); //Это Lazy Initial State. React сам вызовет функцию только один раз при первом рендере

  const { isFormValid, errors: validationErrors } = validateRecipeForm(
    recipeForm,
    Boolean(selectedImageFile),
  ); //Возвращает объект с значением isFormValid=true/false и обьхект ошибок  в полях формы или их отсутствием

  const navigate = useNavigate();

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid || isSubmitting) return;

    try {
      setIsSubmitting(true);

      let imageUrl = '';

      if (selectedImageFile) {
        // Создаём уникальный путь для файла в Supabase Storage.
        const filePath = buildImagePath(currentUserId, selectedImageFile);

        // Загружаем выбранный файл в Supabase Storage по подготовленному пути при помощи uploadRecipeImage.
        // Этот URL понадобится для сохранения рецепта в таблице recipes.
        imageUrl = await uploadRecipeImage(filePath, selectedImageFile);
      }

      const recipeToSubmit = prepareRecipeForSave(recipeForm, imageUrl);

      await createRecipe(recipeToSubmit, currentUserId);

      toast.success('Your recipe has been created.');

      resetForm();

      navigate('/my-recipes');
    } catch (error) {
      console.error('Failed to create recipe:', getErrorMessage(error));
      toast.error('Failed to create the recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRecipeForm(createInitialFormState());
    setSelectedImageFile(null);
    setImagePreviewUrl('');
  };

  return (
    <div>
      <PageTitle title={'New homemade recipe'} />
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
        isFormValid={isFormValid}
        isSubmitting={isSubmitting}
        validationErrors={validationErrors}
        submitButtonText="Create Recipe"
      />
    </div>
  );
};

export default CreateRecipePage;
