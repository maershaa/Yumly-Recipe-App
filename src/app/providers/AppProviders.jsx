import { ThemeProvider } from '@/context';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '@/assets/styles/theme';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};

export { AppProviders };
