const RecipeInfo = ({ values, onChange }) => {
  const cuisines = [
    '',
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
    // image_url,
  } = values;

  const handleImageUpload = (e) => {
    console.log('Сработал клик по добавлению нового изображения:', e);
    console.log('🚀 ~ handleImageUpload ~ e.target:', e.target);
  };

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
        />
      </label>
      <br />
      <label>
        Choose a Cuisine
        <select name="cuisine" value={cuisineValue} onChange={onChange}>
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
      <label>
        Add image
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
    </>
  );
};

export { RecipeInfo };
