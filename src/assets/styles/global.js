import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* 1. Reset (Сброс стилей) */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* 2. Дизайн-токены (CSS-переменные) */
  :root {
    color-scheme: light dark;

    /* Light Theme Tokens */
    --bg-color: #f5f5f7;
    --surface-color: #ffffff;
    --card-color: #ffffff;
    --card-secondary-color: #f2f2f7;
    --accent-color: #ff824d; 
    --text-color: #1d1d1f;
    --text-secondary: #86868b;
    --theme-icon-color: #3671c8;
    --border-color: #d2d2d7;
    --shadow-color: rgba(0, 0, 0, 0.04);
    --shadow: 0 10px 30px var(--shadow-color);
    --input-bg: #ffffff;

    /* Шрифтовые переменные (не зависят от темы) */
    --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-logo: 'Pacifico', cursive;
  }

  [data-theme='dark'] {
    /* Dark Theme Tokens */
    --bg-color: #0b0b0c; 
    --surface-color: #16171a; 
    --card-color: #212329; 
    --card-secondary-color: #2a2d34;
    --accent-color: #f07b4a; 
    --text-color: #f5f5f7;
    --text-secondary: #a1a1a6;
    --theme-icon-color: #ffd700;
    --border-color: #333438;
    --shadow-color: rgba(0, 0, 0, 0.4);
    --shadow: 0 10px 30px var(--shadow-color);
    --input-bg: #2a2a2e;
  }

  /* 3. Глобальные стили для базовых элементов */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: var(--font-main);
    background-color: var(--bg-color);
    color: var(--text-color);

    /* Эффект мягкого перетекания цветов при смене темы */
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  /* Наследуем шрифт переменной для всех текстовых элементов и заголовков */
  p,
  li,
  span,
  a,
  input,
  textarea,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-main);
  }
`;
