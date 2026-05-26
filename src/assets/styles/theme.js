export const theme = Object.freeze({
  colors: Object.freeze({
    background: 'var(--bg-color)',
    surface: 'var(--surface-color)',
    card: 'var(--card-color)',
    cardSecondary: 'var(--card-secondary-color)',
    accent: 'var(--accent-color)',
    text: 'var(--text-color)',
    textSecondary: 'var(--text-secondary)',
    icon: 'var(--theme-icon-color)',
    border: 'var(--border-color)',
    inputBg: 'var(--input-bg)',
  }),

  fonts: Object.freeze({
    main: 'var(--font-main)',
    logo: 'var(--font-logo)',
  }),

  shadows: Object.freeze({
    mainShadow: 'var(--shadow)',
  }),

  radii: Object.freeze({
    md: '12px',
    lg: '16px',
    rounded: '50%',
  }),

  // Настройки сетки и адаптива для медиа-запросов (Mobile-first)
  breakpoints: Object.freeze({
    mobile: '320px',
    tablet: '768px',
    desktop: '1200px',
  }),
});
