import { createStyles, writeCoreTS, writeCSS } from '@blockle/blocks-builder';

const theme = createStyles({
  breakpoints: [0, 500, 800],
  spacing: {
    gutter: 'var(--space-gutter)',
    xsmall: 'var(--space-xsmall)',
    small: 'var(--space-small)',
    medium: 'var(--space-medium)',
    large: 'var(--space-large)',
    xlarge: 'var(--space-xlarge)',
  },
  fontSize: {
    xsmall: 'var(--font-xsmall)',
    small: 'var(--font-small)',
    medium: 'var(--font-medium)',
    large: 'var(--font-large)',
    xlarge: 'var(--font-xlarge)',
  },
  color: {
    black: 'var(--color-black)',
    danger: 'var(--color-danger)',
    dark: 'var(--color-dark)',
    gray: 'var(--color-gray)',
    lightGray: 'var(--color-light-gray)',
    info: 'var(--color-info)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    white: 'var(--color-white)',
    card: 'var(--color-card)',
  },
  fontWeight: {
    regular: 'var(--font-weight-regular)',
    semibold: 'var(--font-weight-semi-bold)',
    bold: 'var(--font-weight-bold)',
  },
});

console.log(JSON.stringify(theme, null, '  '));

writeCSS('./src/useStyles/blockle-blocks.css', theme);
writeCoreTS('./src/useStyles/blocks.ts', theme);
// writeTS('./src/useStyles/blocks.ts', theme);
