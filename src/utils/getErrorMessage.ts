// Type guard (те "error is { message: string }"): проверяет, что error — объект с полем message (например, ошибка Supabase/Axios)
// "error is { message: string }" — говорит TS сузить тип error внутри if, если функция вернула true
const isErrorWithMessage = (error: unknown): error is { message: string } => {
  return typeof error === 'object' && error !== null && 'message' in error;
};

// Универсальное извлечение текста ошибки из unknown — безопасно для любого catch(error)
export const getErrorMessage = (error: unknown): string => {
  // 1. Настоящая JS-ошибка (new Error(), TypeError и т.д.)
  if (error instanceof Error) return error.message;

  // 2. "Ошибкоподобный" объект без instanceof Error (те ошибки которые возвращают Supabase, Axios и т.п.)
  if (isErrorWithMessage(error)) return error.message;

  // 3. Ошибка пришла просто строкой
  if (typeof error === 'string') return error;

  // 4. Совсем непонятно, что это — отдаём заглушку
  return 'Unknown error';
};
