import { FaArrowRight } from 'react-icons/fa';
import { NextButton } from './RecipeNextStepNav.styled';
const RecipeNextStepNav = ({ onTabChange, nextStep, nextStepName }) => {
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
