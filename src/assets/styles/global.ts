import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;


  }

  :root {
  color-scheme: dark;
  /* BASE THEME (DARK DEFAULT) */

  --bg-color: #121418;
  --surface-color: #1A1D24;
  --card-secondary-color: #2D323C;

  --accent-color: #7ab04c;
  --accent-bg-success: rgba(122, 176, 75, 0.1);
  --hover-border-accent: 1px solid var(--accent-color);
  --hover-shadow-accent: 0 0 15px rgba(122, 176, 75, 0.4);



  --accent-secondary: #F8B862;
  --accent-bg-warning: rgba(248, 184, 98, 0.1);
  --hover-border-secondary: 1px solid var(--accent-secondary);
  --hover-shadow-secondary: 0 0 15px rgba(248, 184, 98, 0.4);

  --danger-color: #DC3F45;
  --danger-bg-color: #DC3F45;
  --danger-hover-color: #C9363C;
  --hover-shadow-danger: 0 0 15px rgba(220, 63, 69, 0.35);


  --text-primary: #F5F6F8;
  --text-secondary: #9BA1A6;

  --border-color: #383E49;

  --shadow-color: rgba(122, 176, 75, 0.2);
  --shadow: 0 16px 40px var(--shadow-color);

  --theme-icon-color: #7ab04c;





  --font-main: 'Inter', sans-serif;
  --font-logo: 'Pacifico', cursive;


}

[data-theme='light'] {
  color-scheme: light;

  /* LIGHT THEME */

  --bg-color: #F8F9FA;
  --surface-color: #FFFFFF;
  --card-secondary-color: #EDEFF2;

  --accent-color: #7ab04c;
    --hover-border-accent: 1px solid var(--accent-color);
  --hover-shadow-accent: 0 0 15px rgba(122, 176, 75, 0.3);
  --accent-bg-success: rgba(122, 176, 75, 0.15);

  --accent-secondary: #E0942F;
  --hover-border-secondary: 1px solid var(--accent-secondary);
  --hover-shadow-secondary: 0 0 15px rgba(224, 148, 47, 0.3);
  --accent-bg-warning: rgba(248, 184, 98, 0.5);

  
  --text-primary: #1A1D24;
  --text-secondary: #6A7077;

  --border-color: #D1D5DB;

  --shadow-color: rgba(0, 0, 0, 0.08);
  --shadow: 0 16px 40px var(--shadow-color);

  --theme-icon-color: #7ab04c;


  --danger-color: #D63C42;
--danger-bg-color: #D63C42;
--danger-hover-color: #C53137;
--hover-shadow-danger: 0 0 15px rgba(214, 60, 66, 0.25);
}




  body {
    min-height: 100vh;

    font-family: var(--font-main);
    background-color: var(--bg-color);
    color: var(--text-primary);

    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
