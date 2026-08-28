import { FaPlus, FaTrash } from 'react-icons/fa';
import { GeneralBtn, FieldErrorMessage } from '@/components';
import { StepRow } from './CookingSteps.styled';
import type { FormInstruction } from '@/types';
import type { ChangeEvent } from 'react';

interface CookingStepsProps {
  instructions: FormInstruction[];
  onChange: (id: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
  addStep: () => void;
  removeStep: (id: string) => void;
  isStepsError: string;
}

const CookingSteps = ({
  instructions,
  onChange,
  addStep,
  removeStep,
  isStepsError,
}: CookingStepsProps) => {
  return (
    <>
      <h2>Steps</h2>
      {instructions.map(({ id, text }, index) => (
        <StepRow key={id}>
          <span className="step-number">{index + 1}.</span>{' '}
          <textarea
            aria-label={`Cooking step ${index + 1}`}
            onChange={(e) => onChange(id, e)}
            value={text}
            placeholder={`Describe step ${index + 1}`}
            rows={3}
          />
          <GeneralBtn
            type="button"
            variant="delete"
            onClick={() => removeStep(id)}
            disabled={instructions.length <= 3}
          >
            <FaTrash />
          </GeneralBtn>
        </StepRow>
      ))}
      {isStepsError && <FieldErrorMessage errorMessage={isStepsError} />}
      <GeneralBtn type="button" variant="add" onClick={addStep}>
        <FaPlus />
        Add Step
      </GeneralBtn>
    </>
  );
};

export { CookingSteps };
