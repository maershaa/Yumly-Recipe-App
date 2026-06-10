export const generateRecipeTags = (...args) => {
  return [
    ...args.filter((arg) => typeof arg === 'string' && arg.trim().length > 0),
  ];
};
