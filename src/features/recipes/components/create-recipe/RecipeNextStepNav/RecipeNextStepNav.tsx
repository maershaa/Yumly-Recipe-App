import { FaArrowRight } from 'react-icons/fa';
import { NextButton } from './RecipeNextStepNav.styled';
import type { RecipeFormTabsId, RecipeFormTabsLabel } from '@/types';
import type { Dispatch, SetStateAction } from 'react';

interface RecipeNextStepNav {
  onTabChange: Dispatch<SetStateAction<RecipeFormTabsId>>;
  nextStep: RecipeFormTabsId;
  nextStepName: RecipeFormTabsLabel;
}

const RecipeNextStepNav = ({
  onTabChange,
  nextStep,
  nextStepName,
}: RecipeNextStepNav) => {
  return (
    <NextButton
      key={nextStep}
      type="button"
      onClick={() => onTabChange(nextStep)}
    >
      <span> {nextStepName}</span>
      <FaArrowRight />
    </NextButton>
  );
};

export { RecipeNextStepNav };
