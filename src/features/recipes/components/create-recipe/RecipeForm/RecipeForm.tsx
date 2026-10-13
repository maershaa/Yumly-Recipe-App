import { FaUtensils } from 'react-icons/fa';

import { Form, FormSectionWrapper } from './RecipeForm.styled';
import {
  RecipeTagsCheckbox,
  RecipeInfo,
  AddImageSection,
  Ingredients,
  CookingSteps,
  RecipeFormTabs,
  RecipeNextStepNav,
} from '@/features/recipes/components/create-recipe';

import { GeneralBtn } from '@/components';
import { useRecipeForm } from './useRecipeForm';

import type { RecipeFormState, RecipeFormErrors } from '@/types';
import type { Dispatch, SetStateAction, SubmitEvent } from 'react';

interface RecipeFormProps {
  recipeForm: RecipeFormState;
  setRecipeForm: Dispatch<SetStateAction<RecipeFormState>>;
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  selectedImageFile: File | null;
  setSelectedImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  imagePreviewUrl: string;
  setImagePreviewUrl: React.Dispatch<React.SetStateAction<string>>;
  currentUserId: string;
  isSubmitting: boolean;
  isFormValid: boolean;
  submitButtonText: string;
  validationErrors: RecipeFormErrors;
}

const RecipeForm = ({
  recipeForm,
  setRecipeForm,
  handleSubmit,
  setSelectedImageFile,
  imagePreviewUrl,
  setImagePreviewUrl,
  isSubmitting,
  isFormValid,
  submitButtonText,
  validationErrors,
}: RecipeFormProps) => {
  const {
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
  } = useRecipeForm(
    setRecipeForm,
    setSelectedImageFile,
    setImagePreviewUrl,
    imagePreviewUrl,
  );

  return (
    <Form onSubmit={handleSubmit}>
      <RecipeFormTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'generalInfo' && (
        <>
          <FormSectionWrapper>
            <RecipeInfo
              values={recipeForm}
              onChange={handleInfoChange}
              validationErrors={validationErrors}
              handleInputBlur={handleInputBlur}
              isTouched={isTouched}
            />
          </FormSectionWrapper>

          <FormSectionWrapper>
            <RecipeTagsCheckbox
              tags={recipeForm.tags}
              onChange={handleToggleTags}
            />
          </FormSectionWrapper>

          <FormSectionWrapper>
            <AddImageSection
              recipe_name={recipeForm.recipe_name}
              imagePreviewUrl={imagePreviewUrl}
              handleImageSelect={handleImageSelect}
              removeImage={removeImage}
              isImgError={validationErrors.image_url}
              handleInputBlur={handleInputBlur}
              isTouched={isTouched.image_url}
            />
          </FormSectionWrapper>

          <RecipeNextStepNav
            nextStep={'ingredients'}
            nextStepName={'Ingredients'}
            onTabChange={setActiveTab}
          />
        </>
      )}

      {activeTab === 'ingredients' && (
        <>
          <FormSectionWrapper>
            <Ingredients
              ingredients={recipeForm.ingredients}
              onChange={handleIngredientChange}
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              isIngredientsError={validationErrors.ingredients}
            />
          </FormSectionWrapper>

          <RecipeNextStepNav
            nextStep={'cooking'}
            nextStepName={'Cooking Steps'}
            onTabChange={setActiveTab}
          />
        </>
      )}

      {activeTab === 'cooking' && (
        <FormSectionWrapper>
          <CookingSteps
            instructions={recipeForm.instructions}
            onChange={handleStepChange}
            addStep={addStep}
            removeStep={removeStep}
            isStepsError={validationErrors.instructions}
          />
        </FormSectionWrapper>
      )}

      <GeneralBtn
        type="submit"
        $variant="submit"
        disabled={!isFormValid || isSubmitting}
      >
        <FaUtensils />
        {submitButtonText}
      </GeneralBtn>
    </Form>
  );
};

export { RecipeForm };
