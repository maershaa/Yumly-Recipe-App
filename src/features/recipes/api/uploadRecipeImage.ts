import { supabase } from '@/supabase/supabaseClient';
import { getErrorMessage } from '@/utils';

export const uploadRecipeImage = async (
  filePath: string,
  uploadedFile: File,
): Promise<string> => {
  const { error } = await supabase.storage
    .from('recipeImage')
    .upload(filePath, uploadedFile, {
      cacheControl: '3600',
      upsert: true, //upsert: true говорит Добавь эту строчку, если её еще нет, или обнови её, если она уже существует
    });

  if (error) {
    throw new Error(getErrorMessage(error));
  }
  const { data: urlData } = supabase.storage
    .from('recipeImage')
    .getPublicUrl(filePath); // Передаем filePath, а не просто имя файла
  return urlData.publicUrl;
};

// ?Если бы был платный тариф и я могла бы сдеать оптимизацию и изменение размера изображений
// const { data: urlData } = supabase.storage
//       .from('recipeImage')
//       .getPublicUrl(filePath), {
// transform: {
//На бесплатном тарифе, вызов { transform: { ... } }) то есть оптимизация и изменение размера изображений -вернет ошибку
//       width: 500,
//       height: 600,
//     },
//     }
