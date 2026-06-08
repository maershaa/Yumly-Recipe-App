import { ImgWrapper } from './RecipeInfo.styled';

const RecipeInfo = ({ values, onChange }) => {
  const cuisines = [
    'Ukrainian',
    'American',
    'British',
    'Chinese',
    'French',
    'German',
    'Greek',
    'Indian',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Mexican',
    'Spanish',
    'Thai',
    'Vietnamese',
  ];

  const {
    recipe_name,
    cuisine: cuisineValue,
    cooking_time,
    image_url,
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
      <label>
        Cooking Time
        <input
          type="number"
          name="cooking_time"
          value={cooking_time}
          onChange={onChange}
        />
      </label>

      <ImgWrapper>
        <label>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            multiple={false} //если ты разрешаешь загрузку нескольких фото => true
            onChange={onChange}
            value={image_url}
            name="image_url"
          />
        </label>
      </ImgWrapper>
    </>
  );
};

export { RecipeInfo };
