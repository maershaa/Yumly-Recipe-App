import { useState } from 'react';
import { toast } from 'sonner';

import { uploadRecipeImage } from '@/features/recipes/api';
import {
  createIngredient,
  createStep,
  validateImageFile,
  buildImagePath,
} from '@/features/recipes/helpers';
import { INITIAL_TOUCHED_STATE } from './RecipeForm.constants';
import { getErrorMessage } from '@/utils';

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
  currentUserId: string,
) => {
  const [isTouched, setIsTouched] = useState<RecipeFormTouched>(
    INITIAL_TOUCHED_STATE,
  );
  const [activeTab, setActiveTab] = useState<RecipeFormTabsId>('generalInfo');

  const handleInfoChange = (e: FieldChangeEvent) => {
    const { name, value } = e.target;

    setRecipeForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    const fileError = validateImageFile(uploadedFile);
    if (fileError) {
      toast.info(fileError);
      return;
    }

    const filePath = buildImagePath(currentUserId, uploadedFile);

    try {
      const imageUrl = await uploadRecipeImage(filePath, uploadedFile);
      setRecipeForm((prevValue) => ({
        ...prevValue,
        image_url: imageUrl,
      }));
    } catch (error) {
      toast.error(
        'Something went wrong while loading the image. Please try again.',
      );
      console.error('Failed to load image:', getErrorMessage(error));
    }
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

  const removeImage = () => {
    setRecipeForm((prev) => ({
      ...prev,
      image_url: '',
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
    handleImageUpload,
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
