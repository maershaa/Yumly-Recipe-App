import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export const useRecipeSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const tagParam = searchParams.get('tag');
  const selectedTag = tagParam ?? 'all';

  const searchQuery = searchParams.get('q') ?? ''; // Берём поисковый запрос непосредственно из URL.
  const [searchInput, setSearchInput] = useState(searchQuery); // Значение, которое пользователь сейчас печатает
  const debouncedSearchQuery = useDebounce(searchInput, 300);

  useEffect(() => {
    // Синхронизируем input с URL.
    // При переходе назад/вперёд через браузер: URL изменился → searchQuery изменился → input тоже должен измениться.
    setSearchInput(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    // Если значение в input уже соответствует URL то ничего делать не нужно.
    if (debouncedSearchQuery === searchQuery) return;

    // Пользователь закончил ввод. Обновляем URL и начинаем поиск с первой страницы, потому что результат нового поиска должен начинаться сначала.
    setSearchParams((prevValue) => {
      prevValue.set('page', String(1));
      prevValue.set('q', debouncedSearchQuery);
      return prevValue;
    });
  }, [debouncedSearchQuery, searchQuery, setSearchParams]);

  return { currentPage, selectedTag, searchQuery };
};
