import type { FormInstruction } from '@/types';

export const createStep = (): FormInstruction => ({
  id: crypto.randomUUID(),
  text: '',
});
