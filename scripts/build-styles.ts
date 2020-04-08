const { createTheme, writeCSS, writeTS } = require('../builder');

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
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    black: 'var(--color-black)',
    white: 'var(--color-white)',
    gray: 'var(--color-gray)',
  },
});

writeCSS('./src/useStyles/blockle-blocks.css', theme);
writeTS('./src/useStyles/blocks.ts', theme);
