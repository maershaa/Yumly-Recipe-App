import { FaPlus, FaTrash } from 'react-icons/fa';
import { IngredientRow } from './Ingredients.styled';
import { GeneralBtn } from '@/components';

const Ingredients = ({
  ingredients,
  onChange,
  addIngredient,
  removeIngredient,
}) => {
  const units = ['g', 'kg', 'ml', 'l', 'pcs', 'tbsp', 'tsp'];

  return (
    <>
      <h2>Ingredients</h2>
      {ingredients.map(({ id, name, amount }) => (
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
              min={1}
              onChange={(e) => onChange(id, e)}
              value={amount}
              placeholder="Amount"
            />
            <select name="unit" onChange={(e) => onChange(id, e)}>
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

      <GeneralBtn variant="add" onClick={addIngredient}>
        <FaPlus />
        Add Ingredient
      </GeneralBtn>
    </>
  );
};

export { Ingredients };
