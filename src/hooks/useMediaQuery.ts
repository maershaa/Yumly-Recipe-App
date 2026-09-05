import { useSyncExternalStore } from 'react';

// Хук для отслеживания медиа-запросов (например, "(min-width: 768px)").
// В отличие от useState, значение здесь берётся не из React,
// а из браузерного API matchMedia — поэтому нужен именно useSyncExternalStore,
// а не обычный useState + useEffect.
export const useMediaQuery = (screenSize: string): boolean => {
  // 1. ПОДПИСКА: говорим React, как узнать, что значение изменилось.
  // React сам вызовет эту функцию и передаст свой callback —
  // мы просто должны вызвать этот callback, когда браузер сообщит об изменении.
  const subscribe = (callback: () => void) => {
    const mediaQueryList = window.matchMedia(screenSize);

    // Просим браузер: если ширина экрана пересечёт границу screenSize — вызови callback
    mediaQueryList.addEventListener('change', callback);

    // Функция отписки. React вызовет её сам при размонтировании компонента,
    // чтобы не осталось "забытых" слушателей (утечка памяти)
    return () => mediaQueryList.removeEventListener('change', callback);
  };

  // 2. СНИМОК: говорим React, какое значение сейчас, в данный момент.
  // Вызывается при каждом рендере и при срабатывании подписки выше
  const getSnapshot = () => {
    return window.matchMedia(screenSize).matches;
  };

  // 3. СНИМОК ДЛЯ СЕРВЕРА: что показать, если код выполняется на сервере (SSR).
  // На сервере нет window/браузера, поэтому matchMedia вызвать нельзя.
  // У нас чистый Vite SPA без SSR, так что эта функция реально не используется,
  // но React требует её передать по контракту хука
  const getServerSnapshot = () => {
    return false;
  };

  // Отдаём React все три функции — дальше он сам разберётся,
  // когда их вызывать и когда перерендерить компонент
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
