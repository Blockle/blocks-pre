import { BlockleTheme, BlockleTokens } from './types';

export const createTheme = ({
  breakpoints,
  spacing,
  typography,
  colors,
}: BlockleTokens): BlockleTheme => {
  return {
    breakpoints,
    colors,
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
        grid: {
          display: 'grid',
        },
        'inline-grid': {
          display: 'inline-grid',
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
      overflowX: {
        auto: {
          'overflow-x': 'auto',
        },
        scroll: {
          'overflow-x': 'scroll',
        },
        hidden: {
          'overflow-x': 'hidden',
        },
        visible: {
          'overflow-x': 'visible',
        },
      },
      overflowY: {
        auto: {
          'overflow-y': 'auto',
        },
        scroll: {
          'overflow-y': 'scroll',
        },
        hidden: {
          'overflow-y': 'hidden',
        },
        visible: {
          'overflow-y': 'visible',
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
      fontWeight: {
        regular: {
          'font-weight': 'var(--weight-normal, 400)',
        },
        bold: {
          'font-weight': 'var(--weight-bold, 700)',
        },
      },
      color: {
        primary: {
          color: colors.primary,
        },
        secondary: {
          color: colors.secondary,
        },
        success: {
          color: colors.success,
        },
        warning: {
          color: colors.warning,
        },
        black: {
          color: colors.black,
        },
        white: {
          color: colors.white,
        },
        gray: {
          color: colors.gray,
        },
      },
      backgroundColor: {
        card: {
          'background-color': 'var(--background-card, #fff)',
        },
        primary: {
          'background-color': colors.primary,
        },
        secondary: {
          'background-color': colors.secondary,
        },
        success: {
          'background-color': colors.success,
        },
        warning: {
          'background-color': colors.warning,
        },
        black: {
          'background-color': colors.black,
        },
        white: {
          'background-color': colors.white,
        },
        gray: {
          'background-color': colors.gray,
        },
      },
      gridGap: {
        gutter: {
          'grid-gap': spacing.gutter,
        },
        xsmall: {
          'grid-gap': spacing.xsmall,
        },
        small: {
          'grid-gap': spacing.small,
        },
        medium: {
          'grid-gap': spacing.medium,
        },
        large: {
          'grid-gap': spacing.large,
        },
        xlarge: {
          'grid-gap': spacing.xlarge,
        },
      },
      negativeMarginTop: {
        gutter: {
          'margin-top': `calc(${spacing.gutter} * -1)`,
        },
        xsmall: {
          'margin-top': `calc(${spacing.xsmall} * -1)`,
        },
        small: {
          'margin-top': `calc(${spacing.small} * -1)`,
        },
        medium: {
          'margin-top': `calc(${spacing.medium} * -1)`,
        },
        large: {
          'margin-top': `calc(${spacing.large} * -1)`,
        },
        xlarge: {
          'margin-top': `calc(${spacing.xlarge} * -1)`,
        },
      },
      negativeMarginLeft: {
        gutter: {
          'margin-left': `calc(${spacing.gutter} * -1)`,
        },
        xsmall: {
          'margin-left': `calc(${spacing.xsmall} * -1)`,
        },
        small: {
          'margin-left': `calc(${spacing.small} * -1)`,
        },
        medium: {
          'margin-left': `calc(${spacing.medium} * -1)`,
        },
        large: {
          'margin-left': `calc(${spacing.large} * -1)`,
        },
        xlarge: {
          'margin-left': `calc(${spacing.xlarge} * -1)`,
        },
      },
    },
  };
};
