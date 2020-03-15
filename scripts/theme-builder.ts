const { writeFileSync } = require('fs');

interface BlockleSpacing {
  gutter: string | number;
  xsmall: string | number;
  small: string | number;
  medium: string | number;
  large: string | number;
  xlarge: string | number;
}

interface Typography {
  xsmall: string | number;
  small: string | number;
  medium: string | number;
  large: string | number;
  xlarge: string | number;
}

interface BlockleStyle {
  [value: string]: Record<string | number, string | number>;
}

interface BlockleStyles {
  [name: string]: BlockleStyle;
}

type Breakpoints = number[];

interface BlockleTokens {
  breakpoints: Breakpoints;
  spacing: BlockleSpacing;
  typography: Typography;
}

interface BlockleTheme extends BlockleTokens {
  styles: BlockleStyles;
}

const createTheme = ({ breakpoints, spacing, typography }: BlockleTokens): BlockleTheme => {
  return {
    breakpoints,
    spacing,
    typography,
    styles: {
      alignItems: {
        stretch: {
          'align-items': 'stretch',
        },
        center: {
          'align-items': 'center',
        },
        'flex-start': {
          'align-items': 'flex-start',
        },
        'flex-end': {
          'align-items': 'flex-end',
        },
        baseline: {
          'align-items': 'baseline',
        },
      },
      background: {
        card: {
          'background-color': 'var(--background-card, #fff)',
        },
      },
      display: {
        block: {
          display: 'block',
        },
        inline: {
          display: 'inline',
        },
        'inline-block': {
          display: 'inline-block',
        },
        flex: {
          display: 'flex',
        },
        'inline-flex': {
          display: 'inline-flex',
        },
        none: {
          display: 'none',
        },
      },
      flexDirection: {
        row: {
          'flex-direction': 'row',
        },
        'row-reverse': {
          'flex-direction': 'row-reverse',
        },
        column: {
          'flex-direction': 'column',
        },
        'column-reverse': {
          'flex-direction': 'column-reverse',
        },
      },
      flexGrow: {
        0: {
          'flex-grow': 0,
        },
        1: {
          'flex-grow': 1,
        },
      },
      flexShrink: {
        0: {
          'flex-shrink': 0,
        },
        1: {
          'flex-shrink': 1,
        },
      },
      flexWrap: {
        nowrap: {
          'flex-wrap': 'nowrap',
        },
        wrap: {
          'flex-wrap': 'wrap',
        },
        'wrap-reverse': {
          'flex-wrap': 'wrap-reverse',
        },
      },
      height: {
        full: {
          height: '100%',
        },
      },
      justifyContent: {
        'flex-start': {
          'justify-content': 'flex-start',
        },
        'flex-end': {
          'justify-content': 'flex-end',
        },
        center: {
          'justify-content': 'center',
        },
        'space-between': {
          'justify-content': 'space-between',
        },
        'space-around': {
          'justify-content': 'space-around',
        },
      },
      overflow: {
        auto: {
          overflow: 'auto',
        },
        scroll: {
          overflow: 'scroll',
        },
        hidden: {
          overflow: 'hidden',
        },
        visible: {
          overflow: 'visible',
        },
      },
      padding: {
        gutter: {
          padding: spacing.gutter,
        },
        xsmall: {
          padding: spacing.xsmall,
        },
        small: {
          padding: spacing.small,
        },
        medium: {
          padding: spacing.medium,
        },
        large: {
          padding: spacing.large,
        },
        xlarge: {
          padding: spacing.xlarge,
        },
      },
      paddingBottom: {
        gutter: {
          'padding-bottom': spacing.gutter,
        },
        xsmall: {
          'padding-bottom': spacing.xsmall,
        },
        small: {
          'padding-bottom': spacing.small,
        },
        medium: {
          'padding-bottom': spacing.medium,
        },
        large: {
          'padding-bottom': spacing.large,
        },
        xlarge: {
          'padding-bottom': spacing.xlarge,
        },
      },
      paddingLeft: {
        gutter: {
          'padding-left': spacing.gutter,
        },
        xsmall: {
          'padding-left': spacing.xsmall,
        },
        small: {
          'padding-left': spacing.small,
        },
        medium: {
          'padding-left': spacing.medium,
        },
        large: {
          'padding-left': spacing.large,
        },
        xlarge: {
          'padding-left': spacing.xlarge,
        },
      },
      paddingRight: {
        gutter: {
          'padding-right': spacing.gutter,
        },
        xsmall: {
          'padding-right': spacing.xsmall,
        },
        small: {
          'padding-right': spacing.small,
        },
        medium: {
          'padding-right': spacing.medium,
        },
        large: {
          'padding-right': spacing.large,
        },
        xlarge: {
          'padding-right': spacing.xlarge,
        },
      },
      paddingTop: {
        gutter: {
          'padding-top': spacing.gutter,
        },
        xsmall: {
          'padding-top': spacing.xsmall,
        },
        small: {
          'padding-top': spacing.small,
        },
        medium: {
          'padding-top': spacing.medium,
        },
        large: {
          'padding-top': spacing.large,
        },
        xlarge: {
          'padding-top': spacing.xlarge,
        },
      },
      paddingX: {
        gutter: {
          'padding-left': spacing.gutter,
          'padding-right': spacing.gutter,
        },
        xsmall: {
          'padding-left': spacing.xsmall,
          'padding-right': spacing.xsmall,
        },
        small: {
          'padding-left': spacing.small,
          'padding-right': spacing.small,
        },
        medium: {
          'padding-left': spacing.medium,
          'padding-right': spacing.medium,
        },
        large: {
          'padding-left': spacing.large,
          'padding-right': spacing.large,
        },
        xlarge: {
          'padding-left': spacing.xlarge,
          'padding-right': spacing.xlarge,
        },
      },
      paddingY: {
        gutter: {
          'padding-top': spacing.gutter,
          'padding-bottom': spacing.gutter,
        },
        xsmall: {
          'padding-top': spacing.xsmall,
          'padding-bottom': spacing.xsmall,
        },
        small: {
          'padding-top': spacing.small,
          'padding-bottom': spacing.small,
        },
        medium: {
          'padding-top': spacing.medium,
          'padding-bottom': spacing.medium,
        },
        large: {
          'padding-top': spacing.large,
          'padding-bottom': spacing.large,
        },
        xlarge: {
          'padding-top': spacing.xlarge,
          'padding-bottom': spacing.xlarge,
        },
      },
      position: {
        relative: {
          position: 'relative',
        },
        fixed: {
          position: 'fixed',
        },
        absolute: {
          position: 'absolute',
        },
        sticky: {
          position: 'sticky',
        },
      },
      textAlign: {
        left: {
          'text-align': 'left',
        },
        right: {
          'text-align': 'right',
        },
        center: {
          'text-align': 'center',
        },
        justify: {
          'text-align': 'justify',
        },
      },
      width: {
        full: {
          width: '100%',
        },
      },
      fontSize: {
        xsmall: {
          'font-size': typography.xsmall,
        },
        small: {
          'font-size': typography.small,
        },
        medium: {
          'font-size': typography.medium,
        },
        large: {
          'font-size': typography.large,
        },
        xlarge: {
          'font-size': typography.xlarge,
        },
      },
    },
  };
};

// TODO Change to `bp1`?
function breakpointName(index: number) {
  switch (index) {
    case 0:
      return 'mobile';
    case 1:
      return 'tablet';
    case 2:
      return 'desktop';
    default:
      throw new Error(`useStyles() - Uknown index "${index}"`);
  }
}

// Also write ts?
function writeCSS(filename: string, theme: BlockleTheme) {
  const buffer: string[] = [];
  const breakpointsBuffer: { [key: string]: string[] } = {};
  const breakpoints = [...theme.breakpoints];
  const styles = Object.keys(theme.styles);

  console.log('breakpointsBuffer', breakpoints);

  styles.forEach(name => {
    const style = theme.styles[name];
    const values = Object.keys(style);

    buffer.push(`/* ${name} */`);

    values.forEach(key => {
      const styling = style[key];
      buffer.push(`.bb-${name}-${key} {`);

      Object.keys(styling).forEach(key => {
        buffer.push(`  ${key}: ${styling[key]};`);
      });

      buffer.push('}');
      buffer.push('');

      // Breakpoints
      breakpoints.forEach((breakpoint, i) => {
        if (i === 0) {
          return;
        }
        const index = String(breakpoint);

        if (!breakpointsBuffer[index]) {
          breakpointsBuffer[index] = [];
        }

        breakpointsBuffer[index].push(`  .bb-${name}-${key}-${breakpointName(i)} {`);

        Object.keys(styling).forEach(key => {
          breakpointsBuffer[index].push(`    ${key}: ${styling[key]};`);
        });

        breakpointsBuffer[index].push('  }');
        breakpointsBuffer[index].push('');
      });
    });
  });

  Object.keys(breakpointsBuffer).forEach(breakpoint => {
    buffer.push('');
    buffer.push(`@media (min-width: ${breakpoint}px) {`);
    buffer.push(breakpointsBuffer[breakpoint].join('\n'));
    buffer.push(`}`);
  });

  writeFileSync(filename, buffer.join('\n'));
}

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
});

writeCSS('./default-theme.css', theme);
