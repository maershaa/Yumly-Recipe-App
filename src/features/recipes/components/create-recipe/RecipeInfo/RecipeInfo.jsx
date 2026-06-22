import { DetailsMeta } from './RecipeInfo.styled';
import { FieldErrorMessage } from '@/components';
import { cuisines } from '@/features/recipes/constants';
const RecipeInfo = ({
  values,
  onChange,
  validationErrors,
  handleInputBlur,
  isTouched,
}) => {
  const {
    recipe_name,
    description,
    servings,
    cuisine: cuisineValue,
    cooking_time,
    tips,
  } = values;

  const {
    recipe_name: recipeNameError,
    description: descriptionError,
    servings: servingsError,
    cuisine: cuisineError,
    cooking_time: cookingTimeError,
    tips: tipsError,
  } = validationErrors;

  const {
    recipe_name: isRecipeNameTouched,
    description: isDescriptionTouched,
    servings: isServingsTouched,
    cuisine: isCuisineTouched,
    cooking_time: isCookingTimeTouched,
    tips: isTipsTouched,
  } = isTouched;

  const showRecipeNameError = recipeNameError && isRecipeNameTouched;
  const showDescriptionError = descriptionError && isDescriptionTouched;
  const showCuisineError = cuisineError && isCuisineTouched;
  const showCookingTimeError = cookingTimeError && isCookingTimeTouched;
  const showServingsError = servingsError && isServingsTouched;
  const showTipsError = tipsError && isTipsTouched;

  return (
    <>
      <h2>Recipe Info</h2>
      <label>
        Title
        <input
          type="text"
          name="recipe_name"
          onChange={onChange}
          onBlur={handleInputBlur}
          value={recipe_name}
          placeholder="Recipe title"
          className={showRecipeNameError ? 'invalid' : ''}
        />
      </label>
      {showRecipeNameError && (
        <FieldErrorMessage errorMessage={recipeNameError} />
      )}
      <label>
        Description
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          onBlur={handleInputBlur}
          placeholder="Share the story behind this dish or what makes it special..."
          className={showDescriptionError ? 'invalid' : ''}
        />
      </label>
      {showDescriptionError && (
        <FieldErrorMessage errorMessage={descriptionError} />
      )}
      <label>
        Choose a Cuisine
        <select
          name="cuisine"
          value={cuisineValue}
          onChange={onChange}
          onBlur={handleInputBlur}
          className={showCuisineError ? 'invalid' : ''}
        >
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
      {showCuisineError && <FieldErrorMessage errorMessage={cuisineError} />}

      <DetailsMeta>
        <label>
          Cooking Time
          <input
            type="number"
            name="cooking_time"
            value={cooking_time}
            onChange={onChange}
            onBlur={handleInputBlur}
            placeholder="Enter time in mins"
            min="1"
            className={showCookingTimeError ? 'invalid' : ''}
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
            onBlur={handleInputBlur}
            min="1"
            className={showServingsError ? 'invalid' : ''}
          />
        </label>
      </DetailsMeta>

      {showCookingTimeError && (
        <FieldErrorMessage errorMessage={cookingTimeError} />
      )}

      {showServingsError && <FieldErrorMessage errorMessage={servingsError} />}
      <label>
        <textarea
          name="tips"
          rows={3}
          onChange={onChange}
          onBlur={handleInputBlur}
          value={tips}
          placeholder="Share your kitchen secrets..."
          className={showTipsError ? 'invalid' : ''}
        />
      </label>
      {showTipsError && <FieldErrorMessage errorMessage={tipsError} />}
    </>
  );
};

export { RecipeInfo };
