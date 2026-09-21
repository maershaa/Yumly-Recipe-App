import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import type { MainTagsValue } from '@/types';
import type { ChangeEvent } from 'react';

import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

export const useRecipeSearchParams = (totalRecipesQty: number) => {
  // URL является источником истины для page, tag и q. // Когда URL меняется, searchParams получает новые значения.
  const [searchParams, setSearchParams] = useSearchParams();

  // Текущая страница. Если page отсутствует в URL, используем первую страницу. const currentPage = Number(searchParams.get('page')) || 1;
  const currentPage = Number(searchParams.get('page')) || 1; //

  // Если tag отсутствует в URL, используем значение "all".
  const tagParam = searchParams.get('tag');
  const selectedTag = (tagParam ?? 'all') as MainTagsValue;

  // Поисковый запрос хранится в URL.
  const searchQuery = searchParams.get('q') ?? '';

  // searchInput — текущее значение input. Оно обновляется сразу при каждом вводе пользователя.
  const [searchInput, setSearchInput] = useState(searchQuery);

  // Ждём 300 мс после последнего ввода перед обновлением URL.
  const debouncedSearchQuery = useDebounce(searchInput, 300);

  const totalPages = Math.ceil(totalRecipesQty / RECIPES_PER_PAGE);

  const hasMoreRecipes = currentPage < totalPages;

  useEffect(() => {
    // Синхронизируем input с URL.
    // При переходе назад/вперёд через браузер: URL изменился → searchQuery изменился → input тоже должен измениться.
    setSearchInput(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    // Если значение в input уже соответствует URL то ничего делать не нужно.
    if (debouncedSearchQuery === searchQuery) return;

    // После завершения ввода обновляем URL. Новый поиск всегда начинается с первой страницы.
    setSearchParams((prevValue) => {
      if (debouncedSearchQuery) {
        prevValue.set('q', debouncedSearchQuery);
      } else {
        prevValue.delete('q');
      }
      prevValue.set('page', '1'); //При новом поиске обязательно возвращаемся на первую страницу

      return prevValue;
    });
  }, [debouncedSearchQuery]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleTagChange = (tag: MainTagsValue) => {
    setSearchParams((prevValue) => {
      if (tag === 'all') {
        // так как "all" означает отсутствие фильтра, поэтому параметр tag удаляем.
        prevValue.delete('tag');
      } else {
        prevValue.set('tag', tag);
      }

      prevValue.set('page', '1');

      return prevValue;
    });
  };

  const handleLoadMoreBtnClick = () => {
    setSearchParams((prevValue) => {
      // Меняем только page. q и tag остаются в URL, поэтому следующая страница будет загружена с теми же фильтрами.
      prevValue.set('page', String(currentPage + 1));

      return prevValue;
    });
  };

  return {
    currentPage,
    searchQuery,
    searchInput,
    handleSearchChange,
    selectedTag,
    handleTagChange,
    handleLoadMoreBtnClick,
    hasMoreRecipes,
  };
};
