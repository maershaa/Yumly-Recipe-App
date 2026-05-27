import { ThemeProvider } from '@/context';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '@/assets/styles/theme';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeProvider>
  );
};

export { AppProviders };
