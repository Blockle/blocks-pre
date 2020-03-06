import './use-styles.css';

export type ResponsiveStyle<T extends string | number> = T | [T, T] | [T, T, T];

export type Space = 'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'none';
export type ResponsiveSpace = ResponsiveStyle<Space>;

export interface BBStyles {
  alignItems?: ResponsiveStyle<'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'>;
  background?: ResponsiveStyle<'card'>;
  display?: ResponsiveStyle<'none' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex'>;
  flexDirection?: ResponsiveStyle<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  flexGrow?: ResponsiveStyle<0 | 1>;
  flexShrink?: ResponsiveStyle<0>;
  flexWrap?: ResponsiveStyle<'nowrap' | 'wrap' | 'wrap-reverse'>;
  height?: ResponsiveStyle<'full'>;
  justifyContent?: ResponsiveStyle<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  >;
  overflow?: ResponsiveStyle<'auto' | 'scroll' | 'hidden' | 'visible'>;
  padding?: ResponsiveStyle<Space>;
  paddingBottom?: ResponsiveStyle<Space>;
  paddingLeft?: ResponsiveStyle<Space>;
  paddingRight?: ResponsiveStyle<Space>;
  paddingTop?: ResponsiveStyle<Space>;
  paddingX?: ResponsiveStyle<Space>;
  paddingY?: ResponsiveStyle<Space>;
  position?: ResponsiveStyle<'relative' | 'fixed' | 'absolute' | 'sticky'>;
  textAlign?: ResponsiveStyle<'left' | 'right' | 'center' | 'justify'>;
  width?: ResponsiveStyle<'full'>;
}

// bb -> blockle blocks
// useStyles({ padding: 'small', background: 'card' }); -> 'bb-padding-small bb-background-card'

function getResponsiveName(index: number) {
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

export const useStyles = (styles: BBStyles) => {
  const keys = Object.keys(styles) as Array<keyof BBStyles>;
  const classList: string[] = [];

  keys.forEach(key => {
    const value = styles[key];

    if (value === undefined) {
      return;
    }

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const val = value[i];

        if (i === 0) {
          classList.push(`bb-${key}-${val}`);
        } else {
          classList.push(`bb-${key}-${val}-${getResponsiveName(i)}`);
        }
      }
    } else {
      classList.push(`bb-${key}-${value}`);
    }
  });

  return classList.join(' ');
};

// TODO Remove me
export const useStylesTimed = (styles: BBStyles) => {
  console.time('useStyle');
  const classList = useStyles(styles);
  console.timeEnd('useStyle');

  return classList;
};
