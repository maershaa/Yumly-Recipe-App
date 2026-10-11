import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import {
  createIngredient,
  createStep,
  validateImageFile,
} from '@/features/recipes/helpers';
import { INITIAL_TOUCHED_STATE } from './RecipeForm.constants';

import type { RecipeFormState } from '@/types';
import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import type {
  RecipeFormTabsId,
  RecipeCategoryValue,
  RecipeFormTouched,
  FieldChangeEvent,
  FieldBlurEvent,
} from '@/types';

export const useRecipeForm = (
  setRecipeForm: Dispatch<SetStateAction<RecipeFormState>>,
  setSelectedImageFile: React.Dispatch<React.SetStateAction<File | null>>,
  setImagePreviewUrl: React.Dispatch<React.SetStateAction<string>>,
  imagePreviewUrl: string,
) => {
  const [isTouched, setIsTouched] = useState<RecipeFormTouched>(
    INITIAL_TOUCHED_STATE,
  );
  const [activeTab, setActiveTab] = useState<RecipeFormTabsId>('generalInfo');

  useEffect(() => {
    //  1. При выборе файла URL.createObjectURL(selectedFile) создаёт временный URL для отображения изображения.
    // 2. Когда выбирается другое изображение, React запускает функцию очистки предыдущего эффекта и освобождает старый URL.
    // 3. Когда компонент размонтируется, например пользователь уходит со страницы, URL последнего изображения тоже освобождается.
    // Это важно, потому что временные URL не следует оставлять без необходимости: URL.revokeObjectURL() сообщает браузеру, что этот ресурс больше не используется.
    return () => {
      if (imagePreviewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreviewUrl); //Освобождаем только временные URL (они начинаются с blob), созданные браузером для локальных файлов. Обычные URL изображений из Supabase не являются object URL.
      }
    };
  }, [imagePreviewUrl]);

  const handleInfoChange = (e: FieldChangeEvent) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const fileError = validateImageFile(selectedFile);
    if (fileError) {
      toast.info(fileError);
      event.target.value = ''; // Сбрасываем значение input, чтобы можно было повторно выбрать тот же файл.

      return;
    }

    setSelectedImageFile(selectedFile);
    setImagePreviewUrl(URL.createObjectURL(selectedFile));
  };

  const removeImage = () => {
    // Убираем новый файл, если пользователь выбирал его для загрузки.
    setSelectedImageFile(null);

    // Убираем изображение из превью.
    // Если старый URL был blob:, useEffect освободит его.
    setImagePreviewUrl('');

    // Очищаем URL сохранённого изображения.
    // Это важно при редактировании: пустой image_url означает,
    // что пользователь намеренно удалил изображение.
    setRecipeForm((prev) => ({
      ...prev,
      image_url: '',
    }));
  };

  const handleIngredientChange = (id: string, e: FieldChangeEvent) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: prevValue.ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [name]: value } : ingredient,
      ),
    }));
  };

  const handleStepChange = (id: string, e: FieldChangeEvent) => {
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

  const removeIngredient = (id: string) => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      ingredients: prevValue.ingredients.filter(
        (ingredient) => ingredient.id !== id,
      ),
    }));
  };

  const removeStep = (id: string) => {
    setRecipeForm((prevValue) => ({
      ...prevValue,
      instructions: prevValue.instructions.filter((step) => step.id !== id),
    }));
  };

  const handleInputBlur = (evt: FieldBlurEvent) => {
    const name = evt.currentTarget.name;
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleToggleTags = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const tagValue = value as RecipeCategoryValue;

    // Если тег уже выбран — удаляем его из массива.
    // Если нет — добавляем в конец массива.
    setRecipeForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tagValue)
        ? prev.tags.filter((tag) => tag !== tagValue)
        : [...prev.tags, tagValue],
    }));
  };

  return {
    isTouched,
    activeTab,
    setActiveTab,
    handleInfoChange,
    handleImageSelect,
    handleIngredientChange,
    handleStepChange,
    addIngredient,
    addStep,
    removeIngredient,
    removeStep,
    removeImage,
    handleInputBlur,
    handleToggleTags,
  };
};
