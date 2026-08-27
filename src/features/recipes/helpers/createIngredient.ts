import type { FormIngredient } from '@/types';

export const createIngredient = (): FormIngredient => ({
  id: crypto.randomUUID(),
  name: '',
  amount: '',
  unit: 'g',
});
