import { Wrapper } from './RecipeDetailsContent.styled';

const RecipeDetailsContent = ({ recipe }) => {
  // calories:null
  // cooking_time:70
  // created_at:"2026-06-01T09:41:06.360344+00:00"
  // cuisine:null
  // difficulty:"hard"
  // id:119
  // image_url:"[https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc](https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc)"
  // ingredients:(2)[{…},{…}]
  // instructions:"["Prepare custard", "Bake", "Caramelize sugar"]"
  // likes:224
  // recipe_name:"Creme Brulee"
  // tags:(2)['dessert','french']
  // updated_at:null
  // user_id: "bebbcbe2-5b78-416f-ac1d-dbfad7aa07f1"

  const {
    recipe_name,
    image_url,
    cooking_time,
    tags = [],
    ingredients = [],
    instructions,
  } = recipe;
  return (
    <Wrapper>
      <div className="imgWrapper">
        <img src={image_url} alt={recipe_name} loading="lazy" />
      </div>

      <div className="contentWrapper">
        <h2>{recipe_name}</h2>

        {cooking_time && <span>Prep time: {cooking_time} min</span>}

        <ul>
          {tags?.map((tag) => (
            <li key={tag}>
              <span>{tag.toUpperCase()}</span>
            </li>
          ))}
        </ul>

        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <span>
                {ingredient.name} — {ingredient.amount}
              </span>
            </li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ul>
          {JSON.parse(instructions).map((step, index) => (
            <li key={index}>{`${index + 1}. ${step}`}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export { RecipeDetailsContent };
