const RecipesPage = () => {
  const recipes = [
    {
      id: 1,
      name: 'Classic Pancakes',
      ingredients: [
        { item: 'flour', quantity: '1.5 cups' },
        { item: 'milk', quantity: '1 cup' },
        { item: 'egg', quantity: '1 large' },
        { item: 'sugar', quantity: '1 tbsp' },
        { item: 'baking powder', quantity: '3.5 tsp' },
      ],
      recipe:
        'Mix dry ingredients in a bowl. Add milk and egg, whisk until smooth. Pour batter onto a hot greased griddle. Cook until bubbles form, flip, and cook until golden brown.',
    },
    {
      id: 2,
      name: 'Caprese Salad',
      ingredients: [
        { item: 'fresh mozzarella', quantity: '200g' },
        { item: 'tomatoes', quantity: '2 large' },
        { item: 'fresh basil leaves', quantity: '1/2 cup' },
        { item: 'balsamic glaze', quantity: '1 tbsp' },
        { item: 'olive oil', quantity: '1 tbsp' },
      ],
      recipe:
        'Slice mozzarella and tomatoes into thick rounds. Arrange them on a plate alternating with basil leaves. Drizzle with olive oil and balsamic glaze before serving.',
    },
    {
      id: 3,
      name: 'Garlic Butter Pasta',
      ingredients: [
        { item: 'spaghetti', quantity: '200g' },
        { item: 'butter', quantity: '3 tbsp' },
        { item: 'garlic', quantity: '3 cloves, minced' },
        { item: 'parmesan cheese', quantity: '1/4 cup' },
        { item: 'parsley', quantity: '1 tbsp, chopped' },
      ],
      recipe:
        'Boil pasta according to package instructions. In a separate pan, melt butter and sauté garlic until fragrant. Toss cooked pasta with garlic butter, stir in cheese and parsley.',
    },
  ];

  return (
    <div
      style={{
        margin: '20px 50px',
      }}
    >
      <h1
        style={{
          marginBottom: '20px',
        }}
      >
        RecipesPage{' '}
      </h1>

      <ul style={{ display: 'flex', columnGap: '20px' }}>
        {recipes.map((receipt) => (
          <li
            key={receipt.id}
            style={{ border: '1px solid pink', padding: '20px' }}
          >
            <h2 style={{ fontStyle: 'italic', marginBottom: '20px' }}>
              {receipt.name}
            </h2>
            <h3>Список ингредиентов:</h3>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
                marginBottom: '20px',
              }}
            >
              {receipt.ingredients.map((ingredient) => (
                <li key={ingredient.item}>
                  <span>{ingredient.item}</span>
                  <span>{ingredient.quantity}</span>
                </li>
              ))}
            </ul>
            <h3
              style={{
                marginTop: '20px',
              }}
            >
              Cпособ приготовления:
            </h3>
            <p>{receipt.recipe}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;
