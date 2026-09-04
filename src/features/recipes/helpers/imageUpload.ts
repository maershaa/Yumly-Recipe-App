const MAX_FILE_SIZE_MB = 5;

export const validateImageFile = (uploadedFile: File): string | null => {
  const maxSizeInBytes = MAX_FILE_SIZE_MB * 1024 * 1024; // перевод мегабайтов в байты

  if (uploadedFile.size > maxSizeInBytes) {
    return `Слишком большой файл. Выберите файл до ${MAX_FILE_SIZE_MB} мб`;
  }

  return null;
};

export const buildImagePath = (userId: string, uploadedFile: File): string => {
  const fileExtension = uploadedFile.name.split('.').pop(); // разрешение файла
  const uniqueFileName = `${crypto.randomUUID()}.${fileExtension}`; // рандомное имя, чтобы избежать коллизий

  return `${userId}/${uniqueFileName}`; // путь в сторадже: папка пользователя + уникальное имя файла
};
