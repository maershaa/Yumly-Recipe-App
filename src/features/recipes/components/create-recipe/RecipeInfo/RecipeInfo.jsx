import { DetailsMeta } from './RecipeInfo.styled';
import { cuisines } from '@/features/recipes/constants';
const RecipeInfo = ({ values, onChange }) => {
  const {
    recipe_name,
    description,
    servings,
    cuisine: cuisineValue,
    cooking_time,
    tips,
  } = values;

  return (
    <>
      <h2>Recipe Info</h2>
      <label>
        Title
        <input
          type="text"
          name="recipe_name"
          onChange={onChange}
          value={recipe_name}
          placeholder="Recipe title"
        />
      </label>

      <label>
        Description
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Share the story behind this dish or what makes it special..."
        />
      </label>

      <label>
        Choose a Cuisine
        <select name="cuisine" value={cuisineValue} onChange={onChange}>
          <option value="" disabled>
            Cuisine...
          </option>

          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </label>

      <DetailsMeta>
        <label>
          Cooking Time
          <input
            type="number"
            name="cooking_time"
            value={cooking_time}
            onChange={onChange}
            placeholder="Enter time in mins"
            min="1"
          />
        </label>

        <label>
          Servings
          <input
            type="number"
            name="servings"
            placeholder="Number of servings"
            value={servings}
            onChange={onChange}
            min="1"
          />
        </label>
      </DetailsMeta>

      <label>
        <textarea
          name="tips"
          rows={3}
          onChange={onChange}
          value={tips}
          placeholder="Share your kitchen secrets..."
        />
      </label>
    </>
  );
};

export { RecipeInfo };
