// Формирует итоговый массив тегов для сохранения в базе данных.

export const generateRecipeTags = (selectedTags = [], ...additionalTags) => {
  return [
    ...new Set([
      ...selectedTags,
      ...additionalTags.filter(
        (tag) => typeof tag === 'string' && tag.trim().length > 0,
      ),
    ]),
  ];
};

// selectedTags - теги выбранные пользователем вручную и записанные в массив (поле формы tags)
// additionalTags - теги которые я добавляю сама (сложность блюда в зависимости от времени приготовления, тип кухни (страна))
// Из additionalTags добавляются только непустые строки.
// Set гарантирует отсутствие дублирующихся тегов в итоговом массиве.
