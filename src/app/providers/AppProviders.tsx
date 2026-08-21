import { Provider } from 'react-redux';
import { ReactNode } from 'react';

import { ThemeProvider } from '@/context';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '@/assets/styles/theme';
import { store } from '@/app/redux/store';

interface AppProvidersProps {
  children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};

export { AppProviders };
