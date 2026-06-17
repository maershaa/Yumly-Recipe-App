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

    danger: 'var(--danger-color)',
    dangerBg: 'var(--danger-bg-color)',
    dangerHover: 'var(--danger-hover-color)',

    hoverShadowDanger: 'var(--hover-shadow-danger)',
  },

  fonts: {
    main: 'var(--font-main)',
    logo: 'var(--font-logo)',
  },

  shadows: {
    main: 'var(--shadow)',
  },

  gradients: {
    textAccent: `
      linear-gradient(
        120deg,
        var(--text-primary) 0%,
        var(--accent-color) 60%,
        rgba(94, 224, 163, 0.6) 100%
      )
    `,
  },
  // background: ${({ theme }) => theme.gradients.textAccent};

  radii: {
    md: '12px',
    lg: '16px',
    pill: '999px',
    rounded: '50%',
  },

  transitions: {
    main: 'all 0.3s ease-in-out',
    /*    
    transition: ${({ theme }) => theme.transitions.main}; 
    */
  },

  breakpoints: {
    mobile: '320px',
    mobileLarge: '480px',
    tablet: '768px',
    desktop: '1200px',
  },
});
