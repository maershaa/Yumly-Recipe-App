import { useState } from 'react';
import { useSelector } from 'react-redux';
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
} from '@/features/recipes/components/create-recipe';
import { GeneralBtn } from '@/components';

import { selectUser } from '@/app/redux/auth/selectors';
import { useCreateRecipe, uploadRecipeImage } from '@/features/recipes/api';
import {
  createIngredient,
  createStep,
  prepareRecipeForSave,
} from '@/features/recipes/helpers';

const RecipeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id: currentUserId } = useSelector(selectUser);

  const createRecipe = useCreateRecipe(); // мой хук который достает функцию createRecipe которая готовит на основе формы обьект для отправки на бекенд

  const createInitialFormState = () => ({
    ///мы делаем функцию createInitialFormState а не обьект потому что После очистки формы создаются новые UUID в createIngredient и createStep
    recipe_name: '',
    cuisine: '',
    cooking_time: '',
    image_url: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],
    instructions: [createStep(), createStep(), createStep()],
  });

  const [recipeForm, setRecipeForm] = useState(createInitialFormState); //Это Lazy Initial State. React сам вызовет функцию только один раз при первом рендере

  const isFormValid = () => {
    const titleValid = recipeForm.recipe_name.trim().length >= 3;
    const cuisineValid = recipeForm.cuisine !== '';
    const cookingTimeValid = Number(recipeForm.cooking_time) > 0;

    const ingredientsValid = recipeForm.ingredients.some(
      (ingredient) => ingredient.name.trim() && Number(ingredient.amount) > 0,
    );

    const instructionsValid = recipeForm.instructions.some(
      (step) => step.text.trim().length > 0,
    );

    return (
      titleValid &&
      cuisineValid &&
      cookingTimeValid &&
      ingredientsValid &&
      instructionsValid
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const recipeToSubmit = prepareRecipeForSave(recipeForm);

  //   if (recipeToSubmit) {
  //     createRecipe(recipeToSubmit, currentUserId);
  //     resetForm();
  //   } else {
  //     throw new Error('recipeToSubmit is undefined');
  //   }
  // };

  const handleSubmit = async (e) => {
    //!! вот тут в handleSubmit опиши логику каждого шага
    e.preventDefault();

    if (!isFormValid()) return; // !как оно понимает что форма валидна если там обьект????

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const recipeToSubmit = prepareRecipeForSave(recipeForm);

      await createRecipe(recipeToSubmit, currentUserId);

      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRecipeForm(createInitialFormState());
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleImageUpload = async (event) => {
    console.log('Сработало нажатие на загрузить картинку');
    const uploadedFile = event.target.files[0];
    console.log('🚀 ~ handleImg ~ uploadedFile:', uploadedFile);
    if (!uploadedFile) return;

    const maxFileSizeInMb = 5;

    if (uploadedFile.size > maxFileSizeInMb * 1024 * 1024) {
      alert('Слишком большой файл. Выберите файл до 5 мб');
      return;
    }

    const fileExtension = uploadedFile.name.split('.').pop();
    const uniqueName = `${crypto.randomUUID()}.${fileExtension}`; //создаем рандомное имя картинке
    const filePath = `${currentUserId}/${uniqueName}`; //создаем папку с id нашего пользователя в хранилище recipeImage и туда сохраняем картинку.

    try {
      const imageUrl = await uploadRecipeImage(filePath, uploadedFile);
      console.log('Картинка успешно загружена:', imageUrl);
      setRecipeForm((prevValue) => ({
        ...prevValue,
        image_url: imageUrl,
      }));
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
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

  return (
    <Form onSubmit={handleSubmit}>
      <FormMainSection>
        <FormSectionWrapper>
          <RecipeInfo
            values={recipeForm}
            onChange={handleInfoChange}
            handleImageUpload={handleImageUpload}
            removeImage={removeImage}
          />
        </FormSectionWrapper>
        <FormSectionWrapper>
          <Ingredients
            ingredients={recipeForm.ingredients}
            onChange={handleIngredientChange}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
          />
        </FormSectionWrapper>
      </FormMainSection>

      <FormStepsSection>
        <FormSectionWrapper>
          <CookingSteps
            instructions={recipeForm.instructions}
            onChange={handleStepChange}
            addStep={addStep}
            removeStep={removeStep}
          />
        </FormSectionWrapper>

        <GeneralBtn
          type="submit"
          variant="submit"
          disabled={!isFormValid() || isSubmitting}
        >
          <FaUtensils />
          Create Recipe
        </GeneralBtn>
      </FormStepsSection>
    </Form>
  );
};

export { RecipeForm };
