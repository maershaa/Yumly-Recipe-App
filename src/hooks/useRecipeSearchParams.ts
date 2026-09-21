import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import type { MainTagsValue } from '@/types';
import type { ChangeEvent } from 'react';

import { RECIPES_PER_PAGE } from '@/features/recipes/constants';

export const useRecipeSearchParams = () => {
  // URL является источником истины для page, tag и q.
  // Поэтому при изменении этих параметров React Router перерисует страницу
  // и ниже мы получим актуальные значения из searchParams.
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1; //  Получаем текущую страницу непосредственно из URL. Если параметра page нет, считаем, что пользователь находится на первой странице.

  // Если tag отсутствует в URL, используем значение "all".
  const tagParam = searchParams.get('tag');
  const selectedTag = (tagParam ?? 'all') as MainTagsValue;

  const searchQuery = searchParams.get('q') ?? ''; // Поиск хранится в URL, поэтому ссылкой с параметром ?q=pasta

  const [searchInput, setSearchInput] = useState(searchQuery); // Значение, которое пользователь сейчас печатает
  const debouncedSearchQuery = useDebounce(searchInput, 300);

  const [totalRecipesQty, setTotalRecipesQty] = useState(0);
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

    // Пользователь закончил ввод. Обновляем URL и начинаем поиск с первой страницы, потому что результат нового поиска должен начинаться сначала.
    setSearchParams((prevValue) => {
      if (debouncedSearchQuery) {
        prevValue.set('q', debouncedSearchQuery);
      } else {
        prevValue.delete('q');
      }
      prevValue.set('page', String(1)); //При новом поиске обязательно возвращаемся на первую страницу

      return prevValue;
    });
  }, [debouncedSearchQuery, searchQuery, setSearchParams]);

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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
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
    setTotalRecipesQty,
    handleLoadMoreBtnClick,
    hasMoreRecipes,
  };
};
