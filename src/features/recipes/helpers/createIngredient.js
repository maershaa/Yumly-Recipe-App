export const createIngredient = () => ({
  id: crypto.randomUUID(),
  name: '',
  amount: '',
  unit: 'g',
});
