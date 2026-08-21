export type ThemeMode = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export interface Theme {
  colors: {
    background: string;
    surface: string;
    cardSecondary: string;

    textPrimary: string;
    textSecondary: string;

    icon: string;
    border: string;

    accent: string;
    hoverBorderAccent: string;
    hoverShadowAccent: string;
    accentBgSuccess: string;

    accentSecondary: string;
    hoverBorderSecondary: string;
    hoverShadowSecondary: string;
    accentBgWarning: string;

    danger: string;
    dangerBg: string;
    dangerHover: string;
    hoverShadowDanger: string;
  };

  fonts: {
    main: string;
    logo: string;
  };

  shadows: {
    main: string;
  };

  gradients: {
    textAccent: string;
  };

  radii: {
    sm: string;
    md: string;
    lg: string;
    pill: string;
    rounded: string;
  };

  transitions: {
    main: string;
  };

  breakpoints: {
    mobile: string;
    mobileLarge: string;
    tablet: string;
    desktop: string;
  };
}
