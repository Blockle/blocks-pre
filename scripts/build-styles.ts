import { createTheme, writeCSS, writeTS } from '@blockle/blocks-builder';

const theme = createTheme({
  breakpoints: [0, 500, 800],
  spacing: {
    gutter: 'var(--space-gutter)',
    xsmall: 'var(--space-xsmall)',
    small: 'var(--space-small)',
    medium: 'var(--space-medium)',
    large: 'var(--space-large)',
    xlarge: 'var(--space-xlarge)',
  },
  typography: {
    xsmall: 'var(--font-xsmall)',
    small: 'var(--font-small)',
    medium: 'var(--font-medium)',
    large: 'var(--font-large)',
    xlarge: 'var(--font-xlarge)',
  },
  colors: {
    black: 'var(--color-black)',
    danger: 'var(--color-danger)',
    dark: 'var(--color-dark)',
    gray: 'var(--color-gray)',
    info: 'var(--color-info)',
    light: 'var(--color-light)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    white: 'var(--color-white)',
    card: 'var(--color-card)',
  },
});

writeCSS('./src/useStyles/blockle-blocks.css', theme);
writeTS('./src/useStyles/blocks.ts', theme);
