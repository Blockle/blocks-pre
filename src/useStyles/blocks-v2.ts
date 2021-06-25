export type ResponsiveStyleProp<T extends string | number> = T | T[];

export interface BlocksStyles {
  color:
    | 'black'
    | 'danger'
    | 'dark'
    | 'gray'
    | 'lightGray'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'white'
    | 'card';
  fontSize: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  fontWeight: 'regular' | 'semibold' | 'bold';
  spacing: 'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

type ExtendedStyles = 'BlocksStyles' extends keyof Window ? Window['BlocksStyles'] : BlocksStyles;

type GetStyleValue<K extends keyof BlocksStyles> = ExtendedStyles[K] extends string
  ? ExtendedStyles[K]
  : BlocksStyles[K];

export interface StyleProps {
  display?: ResponsiveStyleProp<
    'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
  >;
  flexDirection?: ResponsiveStyleProp<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  flexGrow?: ResponsiveStyleProp<'0' | '1'>;
  flexShrink?: ResponsiveStyleProp<'0'>;
  flexWrap?: ResponsiveStyleProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
  height?: ResponsiveStyleProp<'full'>;
  alignItems?: ResponsiveStyleProp<
    'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'start' | 'end'
  >;
  justifyItems?: ResponsiveStyleProp<'stretch' | 'center' | 'start' | 'end'>;
  justifyContent?: ResponsiveStyleProp<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  >;
  overflow?: ResponsiveStyleProp<'auto' | 'scroll' | 'hidden' | 'visible'>;
  overflowX?: ResponsiveStyleProp<'auto' | 'scroll' | 'hidden' | 'visible'>;
  overflowY?: ResponsiveStyleProp<'auto' | 'scroll' | 'hidden' | 'visible'>;
  position?: ResponsiveStyleProp<'relative' | 'fixed' | 'absolute' | 'sticky'>;
  textAlign?: ResponsiveStyleProp<'left' | 'right' | 'center' | 'justify'>;
  textTransform?: ResponsiveStyleProp<'capitalise' | 'none' | 'uppercase' | 'lowercase'>;
  width?: ResponsiveStyleProp<'full'>;
  fontStyle?: ResponsiveStyleProp<'normal' | 'italic'>;
  gridAutoFlow?: ResponsiveStyleProp<'row' | 'column'>;
  fontSize?: ResponsiveStyleProp<GetStyleValue<'fontSize'>>;
  fontWeight?: ResponsiveStyleProp<GetStyleValue<'fontWeight'>>;
  color?: ResponsiveStyleProp<GetStyleValue<'color'>>;
  backgroundColor?: ResponsiveStyleProp<GetStyleValue<'color'>>;
  padding?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  paddingBottom?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  paddingLeft?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  paddingRight?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  paddingTop?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  paddingX?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  paddingY?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  gridGap?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  columnGap?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  rowGap?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  negativeMarginTop?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
  negativeMarginLeft?: ResponsiveStyleProp<GetStyleValue<'spacing'>>;
}

export type PickStyleProps<T extends keyof StyleProps> = Partial<Pick<StyleProps, T>>;
