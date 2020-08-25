export type ResponsiveStyleProp<T extends string | number> = T | T[];

export interface StyleProps {
  alignItems?: ResponsiveStyleProp<'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'>;
  display?: ResponsiveStyleProp<
    'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
  >;
  flexDirection?: ResponsiveStyleProp<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  flexGrow?: ResponsiveStyleProp<0 | 1>;
  flexShrink?: ResponsiveStyleProp<0>;
  flexWrap?: ResponsiveStyleProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
  height?: ResponsiveStyleProp<'full'>;
  justifyContent?: ResponsiveStyleProp<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  >;
  overflow?: ResponsiveStyleProp<'auto' | 'scroll' | 'hidden' | 'visible'>;
  overflowX?: ResponsiveStyleProp<'auto' | 'scroll' | 'hidden' | 'visible'>;
  overflowY?: ResponsiveStyleProp<'auto' | 'scroll' | 'hidden' | 'visible'>;
  padding?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingBottom?: ResponsiveStyleProp<
    'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  >;
  paddingLeft?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingRight?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingTop?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingX?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingY?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  position?: ResponsiveStyleProp<'relative' | 'fixed' | 'absolute' | 'sticky'>;
  textAlign?: ResponsiveStyleProp<'left' | 'right' | 'center' | 'justify'>;
  textTransform?: ResponsiveStyleProp<'capitalise' | 'none' | 'uppercase' | 'lowercase'>;
  width?: ResponsiveStyleProp<'full'>;
  fontSize?: ResponsiveStyleProp<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  fontWeight?: ResponsiveStyleProp<'regular' | 'bold'>;
  color?: ResponsiveStyleProp<
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
    | 'card'
  >;
  backgroundColor?: ResponsiveStyleProp<
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
    | 'card'
  >;
  gridGap?: ResponsiveStyleProp<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  negativeMarginTop?: ResponsiveStyleProp<
    'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  >;
  negativeMarginLeft?: ResponsiveStyleProp<
    'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  >;
}

export type PickStyleProps<T extends keyof StyleProps> = Partial<Pick<StyleProps, T>>;
