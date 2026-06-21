import { supabase } from '../../../supabase/supabaseClient';

export const uploadRecipeImage = async (filePath, uploadedFile) => {
  try {
    const { data, error } = await supabase.storage
      .from('recipeImage')
      .upload(filePath, uploadedFile, {
        cacheControl: '3600',
        upsert: true, //upsert: true говорит Добавь эту строчку, если её еще нет, или обнови её, если она уже существует
      });

    if (error) throw error;

    console.log('🚀 ~ Upload success ~ data:', data);
    const { data: urlData } = supabase.storage
      .from('recipeImage')
      .getPublicUrl(filePath); // Передаем filePath, а не просто имя файла
    return urlData.publicUrl;
  } catch (error) {
    console.error('Error saving recipe:', error.message);
    throw error;
  }
};

// !Если бы был платный тариф и я могла бы сдеать оптимизацию и изменение размера изображений
// const { data: urlData } = supabase.storage
//       .from('recipeImage')
//       .getPublicUrl(filePath), {
// transform: {
//На бесплатном тарифе, вызов { transform: { ... } }) то есть оптимизация и изменение размера изображений -вернет ошибку
//       width: 500,
//       height: 600,
//     },
//     }
