import { useCallback, useState } from 'react';
import {
  RecipeInfo,
  Ingredients,
  CookingSteps,
} from '@/features/recipes/components/create-recipe';
import { GeneralBtn } from '@/components';
import {
  Form,
  FormSectionWrapper,
  FormMainSection,
  FormStepsSection,
} from './RecipeForm.styled';
import { FaUtensils } from 'react-icons/fa';
import { supabase } from '../../../../../../supabaseClient';
import { useSelector } from 'react-redux';
import { selectUser } from '@/app/redux/auth/selectors';
import {
  calculateDifficulty,
  generateRecipeTags,
} from '@/features/recipes/utils';
import { useCreateRecipe } from '@/features/recipes/api';

const createIngredient = () => ({
  id: crypto.randomUUID(), //!Обязательно. чтобы БД знала к какому пользователю закрепить рецепт
  name: '',
  amount: '',
  unit: 'g',
});

const createStep = () => ({ id: crypto.randomUUID(), text: '' });

const RecipeForm = () => {
  const { id: currentUserId } = useSelector(selectUser);

  const initialFormState = {
    recipe_name: '',
    cuisine: '',
    cooking_time: '',
    image_url: '',

    ingredients: [createIngredient(), createIngredient(), createIngredient()],
    instructions: [createStep(), createStep(), createStep()],
  };

  const [recipeForm, setRecipeForm] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //! сохраняем картинку пользователя сейчас!!!!

    const recipeToSubmit = {
      ...recipeForm,

      ingredients: recipeForm.ingredients.map((el) => {
        return {
          name: el.name.trim(),
          amount: el.amount,
          unit: el.unit,
        };
      }),

      instructions: recipeForm.instructions.map((el, index) => {
        return {
          step: index,
          text: el.text.trim(),
        };
      }),

      calories: null,
      isHealthy: false,
      isVegan: false,
      difficulty: calculateDifficulty(Number(recipeForm.cooking_time)),

      tags: generateRecipeTags(
        recipeForm.cuisine,
        calculateDifficulty(Number(recipeForm.cooking_time)),
        // isHealthy === true && 'healthy',
      ),
      likes: 0,
    };

    console.log('🚀 ~ handleSubmit ~ recipeToSubmit:', recipeToSubmit);

    // const createRecipe = useCreateRecipe();
    // createRecipe(recipeToSubmit,currentUserId);

    // setRecipeForm(initialFormState);
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

    const filePath = `${currentUserId}/${uploadedFile.name}`; //создаем папку с id нашего пользователя в хранилище recipeImage и туда сохраняем картинку.
    //!Картинки с русскими именами надо будет переделать так как они не загрузят и будет ошибка. Какие есть способы для решения этого?

    uploadRecipeImage(filePath, uploadedFile);
  };

  const uploadRecipeImage = async (filePath, uploadedFile) => {
    try {
      const { data, error } = await supabase.storage
        .from('recipeImage')
        .upload(filePath, uploadedFile, {
          cacheControl: '3600',
          upsert: true, //upsert: true говорит Добавь эту строчку, если её еще нет, или обнови её, если она уже существует
        });

      if (error) throw error;
      console.log('🚀 ~ Upload success ~ data:', data);

      // const { fullPath, id, path } = data;

      const { data: urlData } = supabase.storage
        .from('recipeImage')
        .getPublicUrl(filePath); // Передаем filePath, а не просто имя файла
      // {
      //transform: { //!На бесплатном тарифе, вызов { transform: { ... } }) то есть оптимизация и изменение размера изображений -вернет ошибку
      //   width: 500,
      //   height: 600,
      // },
      // }
      setRecipeForm((prevValue) => ({
        ...prevValue,
        image_url: urlData.publicUrl,
      }));
    } catch (error) {
      console.error('Error saving recipe:', error.message);
      throw error;
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

  return (
    <Form onSubmit={handleSubmit}>
      <FormMainSection>
        <FormSectionWrapper>
          <RecipeInfo
            values={recipeForm}
            onChange={handleInfoChange}
            handleImageUpload={handleImageUpload}
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

        <GeneralBtn type="submit" variant="submit">
          <FaUtensils />
          Create Recipe
        </GeneralBtn>
      </FormStepsSection>
    </Form>
  );
};

export { RecipeForm };
