import { FaPlus, FaTrash } from 'react-icons/fa';
import { GeneralBtn } from '@/components';
import { StepRow } from './CookingSteps.styled';

const CookingSteps = ({ instructions, onChange, addStep, removeStep }) => {
  return (
    <>
      <h2>Steps</h2>
      {instructions.map(({ id, text }, index) => (
        <StepRow key={id}>
          <label>
            <span className="step-number">{index + 1}.</span>{' '}
            <textarea
              type="text"
              name="step"
              onChange={(e) => onChange(id, e)}
              value={text}
              placeholder={`Describe step ${index + 1}`}
              rows={3}
            />
          </label>

          <GeneralBtn
            variant="delete"
            onClick={() => removeStep(id)}
            disabled={instructions.length <= 3}
          >
            <FaTrash />
          </GeneralBtn>
        </StepRow>
      ))}

      <GeneralBtn variant="add" onClick={addStep}>
        <FaPlus />
        Add Step
      </GeneralBtn>
    </>
  );
};

export { CookingSteps };
