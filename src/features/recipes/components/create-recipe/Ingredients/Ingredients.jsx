import { AddBtn } from '@/components';

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
      {/*!!  Как реализовать 3 поля по умолчанию и при нажатии на кнопку авто добавление еще полей*/}
      {ingredients.map(({ id, name, amount }) => (
        <div key={id}>
          <label>
            <input
              type="text"
              name={'name'}
              onChange={(e) => onChange(id, e)}
              value={name}
            />{' '}
            <input
              type="number"
              name="amount"
              min={1}
              max={1000}
              step={1}
              onChange={(e) => onChange(id, e)}
              value={amount}
            />
            <select name="unit" onChange={(e) => onChange(id, e)}>
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={() => removeIngredient(id)}>
            Delete
          </button>
        </div>
      ))}

      <AddBtn onClick={addIngredient} btnText={'Add new ingredient'} />
    </>
  );
};

export { Ingredients };
