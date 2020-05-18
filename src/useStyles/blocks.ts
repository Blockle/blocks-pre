type ResponsiveStyle<T extends string | number> = T | T[];

export interface StyleProps {
  alignItems?: ResponsiveStyle<'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'>;
  display?: ResponsiveStyle<'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'none'>;
  flexDirection?: ResponsiveStyle<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  flexGrow?: ResponsiveStyle<0 | 1>;
  flexShrink?: ResponsiveStyle<0>;
  flexWrap?: ResponsiveStyle<'nowrap' | 'wrap' | 'wrap-reverse'>;
  height?: ResponsiveStyle<'full'>;
  justifyContent?: ResponsiveStyle<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  >;
  overflow?: ResponsiveStyle<'auto' | 'scroll' | 'hidden' | 'visible'>;
  overflowX?: ResponsiveStyle<'auto' | 'scroll' | 'hidden' | 'visible'>;
  overflowY?: ResponsiveStyle<'auto' | 'scroll' | 'hidden' | 'visible'>;
  padding?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingBottom?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingLeft?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingRight?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingTop?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingX?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  paddingY?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  position?: ResponsiveStyle<'relative' | 'fixed' | 'absolute' | 'sticky'>;
  textAlign?: ResponsiveStyle<'left' | 'right' | 'center' | 'justify'>;
  width?: ResponsiveStyle<'full'>;
  fontSize?: ResponsiveStyle<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
  fontWeight?: ResponsiveStyle<'regular' | 'bold'>;
  color?: ResponsiveStyle<
    'primary' | 'secondary' | 'success' | 'warning' | 'black' | 'white' | 'gray'
  >;
  backgroundColor?: ResponsiveStyle<
    'card' | 'primary' | 'secondary' | 'success' | 'warning' | 'black' | 'white' | 'gray'
  >;
  stackGap?: ResponsiveStyle<'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>;
}

export type PickStyleProps<T extends keyof StyleProps> = Partial<Pick<StyleProps, T>>;
