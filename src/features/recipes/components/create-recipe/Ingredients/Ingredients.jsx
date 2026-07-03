import { FaPlus, FaTrash } from 'react-icons/fa';
import { IngredientRow } from './Ingredients.styled';
import { GeneralBtn, FieldErrorMessage } from '@/components';
import { units } from '@/features/recipes/constants';

const Ingredients = ({
  ingredients,
  onChange,
  addIngredient,
  removeIngredient,
  isIngredientsError,
}) => {
  return (
    <>
      <h2>Ingredients</h2>
      {ingredients.map(({ id, name, amount, unit }) => (
        <IngredientRow key={id}>
          <label>
            <input
              type="text"
              name={'name'}
              onChange={(e) => onChange(id, e)}
              value={name}
              placeholder="Ingredient name"
            />{' '}
            <input
              type="number"
              name="amount"
              min="0"
              step="0.01"
              onChange={(e) => onChange(id, e)}
              value={amount}
              placeholder="Amount"
            />
            <select name="unit" value={unit} onChange={(e) => onChange(id, e)}>
              {units.map((unitOption) => (
                <option key={unitOption} value={unitOption}>
                  {unitOption}
                </option>
              ))}
            </select>
          </label>

          <GeneralBtn
            variant="delete"
            onClick={() => removeIngredient(id)}
            disabled={ingredients.length <= 3}
          >
            <FaTrash />
          </GeneralBtn>
        </IngredientRow>
      ))}
      {isIngredientsError && (
        <FieldErrorMessage errorMessage={isIngredientsError} />
      )}
      <GeneralBtn variant="add" onClick={addIngredient}>
        <FaPlus />
        Add Ingredient
      </GeneralBtn>
    </>
  );
};

export { Ingredients };
