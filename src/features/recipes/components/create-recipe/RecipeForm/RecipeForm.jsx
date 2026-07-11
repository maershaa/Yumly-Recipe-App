import { FaUtensils } from 'react-icons/fa';

import {
  Form,
  FormSectionWrapper,
  FormMainSection,
  FormStepsSection,
} from './RecipeForm.styled';
import {
  RecipeInfo,
  Ingredients,
  CookingSteps,
  AddImageSection,
} from '@/features/recipes/components/create-recipe';
import { GeneralBtn } from '@/components';

import { uploadRecipeImage } from '@/features/recipes/api';
import { createIngredient, createStep } from '@/features/recipes/helpers';
import { useState } from 'react';

import { RecipeTagsCheckbox } from '@/features/recipes/components/create-recipe';

const RecipeForm = ({
  recipeForm,
  setRecipeForm,
  handleSubmit,
  currentUserId,
  isSubmitting,
  isFormValid,
  submitButtonText,
  validationErrors,
}) => {
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

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleImageUpload = async (event) => {
    const maxFileSizeInMb = 5;
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    if (
      uploadedFile.size >
      maxFileSizeInMb * 1024 * 1024
    ) // * 1024 * 1024 - перевод размера из мегабайтов в байты
    {
      alert('Слишком большой файл. Выберите файл до 5 мб');
      return;
    }

    const fileExtension = uploadedFile.name.split('.').pop(); //вырезаем разрешение изображения
    const uniqueName = `${crypto.randomUUID()}.${fileExtension}`; //создаем рандомное имя картинке
    const filePath = `${currentUserId}/${uniqueName}`; //создаем папку с id нашего пользователя в хранилище recipeImage и туда сохраняем картинку.

    try {
      const imageUrl = await uploadRecipeImage(filePath, uploadedFile);
      setRecipeForm((prevValue) => ({
        ...prevValue,
        image_url: imageUrl,
      }));
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
  };

  const handleIngredientChange = (id, e) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: prevValue.ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [name]: value } : ingredient,
      ),
    }));
  };

  const handleStepChange = (id, e) => {
    const { value } = e.target;

    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: prevValue.instructions.map((step) =>
        step.id === id ? { ...step, text: value } : step,
      ),
    }));
  };

  const addIngredient = () => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: [...prevValue.ingredients, createIngredient()],
    }));
  };

  const addStep = () => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: [...prevValue.instructions, createStep()],
    }));
  };

  const removeIngredient = (id) => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: prevValue.ingredients.filter(
        (ingredient) => ingredient.id !== id,
      ),
    }));
  };

  const removeStep = (id) => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: prevValue.instructions.filter((step) => step.id !== id),
    }));
  };

  const removeImage = () => {
    setRecipeForm((prev) => ({
      ...prev,
      image_url: '',
    }));
  };

  const handleInputBlur = (evt) => {
    const name = evt.currentTarget.name;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleToggleTags = ({ target: { value } }) => {
    // Если тег уже выбран — удаляем его из массива.
    // Если нет — добавляем в конец массива.
    setRecipeForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(value)
        ? prev.tags.filter((tag) => tag !== value)
        : [...prev.tags, value],
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormMainSection>
        <FormSectionWrapper>
          <RecipeInfo
            values={recipeForm}
            onChange={handleInfoChange}
            validationErrors={validationErrors}
            // Обработчик отображения валидности инпутов в форме и состояние было ли на инпуте событие фокуса
            handleInputBlur={handleInputBlur}
            isTouched={isTouched}
          />
        </FormSectionWrapper>

        <FormSectionWrapper>
          <RecipeTagsCheckbox values={recipeForm} onChange={handleToggleTags} />
        </FormSectionWrapper>

        <FormSectionWrapper>
          <AddImageSection
            recipe_name={recipeForm.recipe_name}
            image_url={recipeForm.image_url}
            handleImageUpload={handleImageUpload}
            removeImage={removeImage}
            isImgError={validationErrors.image}
            // Обработчик отображения валидности инпутов в форме и состояние было ли на инпуте событие фокуса
            handleInputBlur={handleInputBlur}
            isTouched={isTouched}
          ></AddImageSection>
        </FormSectionWrapper>
      </FormMainSection>

      <FormStepsSection>
        <FormSectionWrapper>
          <Ingredients
            ingredients={recipeForm.ingredients}
            onChange={handleIngredientChange}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            isIngredientsError={validationErrors.ingredients}
          />
        </FormSectionWrapper>

        <FormSectionWrapper>
          <CookingSteps
            instructions={recipeForm.instructions}
            onChange={handleStepChange}
            addStep={addStep}
            removeStep={removeStep}
            isStepsError={validationErrors.instructions}
          />
        </FormSectionWrapper>

        <GeneralBtn
          type="submit"
          variant="submit"
          disabled={!isFormValid || isSubmitting}
        >
          <FaUtensils />
          {submitButtonText}
        </GeneralBtn>
      </FormStepsSection>
    </Form>
  );
};

export { RecipeForm };
