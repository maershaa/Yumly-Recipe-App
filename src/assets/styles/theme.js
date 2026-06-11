export const theme = Object.freeze({
  colors: {
    background: 'var(--bg-color)',
    accentBgSuccess: 'var(--accent-bg-success)',
    accentBgWarning: 'var(--accent-bg-warning)',

    surface: 'var(--surface-color)',
    cardSecondary: 'var(--card-secondary-color)',

    accent: 'var(--accent-color)',
    accentSecondary: 'var(--accent-secondary)',

    textPrimary: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)',

    icon: 'var(--theme-icon-color)',

    border: 'var(--border-color)',

    hoverBorderAccent: 'var(--hover-border-accent)',
    hoverShadowAccent: 'var(--hover-shadow-accent)',

    hoverBorderSecondary: 'var(--hover-border-secondary)',
    hoverShadowSecondary: 'var(--hover-shadow-secondary)',
  },

  fonts: {
    main: 'var(--font-main)',
    logo: 'var(--font-logo)',
  },

  shadows: {
    main: 'var(--shadow)',
  },

  radii: {
    md: '12px',
    lg: '16px',
    rounded: '50%',
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1200px',
  },
});
