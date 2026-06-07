import { AddBtn } from '@/components';

const CookingSteps = ({ instructions, onChange, addStep, removeStep }) => {
  return (
    <>
      <h2>Steps</h2>
      {instructions.map(({ id, text }) => (
        <div key={id}>
          <label>
            <input
              type="text"
              name="step"
              onChange={(e) => onChange(id, e)}
              value={text}
            />
          </label>

          <button type="button" onClick={() => removeStep(id)}>
            Delete
          </button>
        </div>
      ))}

      <AddBtn onClick={addStep} btnText={'Add new step'} />
    </>
  );
};

export { CookingSteps };
