export declare type ResponsiveStyleProp<T extends string | number> = T | T[];

export interface BlocksStyles {
  colors:
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
  spacing: 'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  fontWeight: 'regular' | 'bold';
  fontSize: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

type ExtendedStyles = 'BlocksStyles' extends keyof Window ? Window['BlocksStyles'] : BlocksStyles;

type GetStyleValue<K extends keyof BlocksStyles> = ExtendedStyles[K] extends string
  ? ExtendedStyles[K]
  : BlocksStyles[K];

export interface FinalBlocksTheming {
  colors: GetStyleValue<'colors'>;
  spacing: GetStyleValue<'spacing'>;
  fontWeight: GetStyleValue<'fontWeight'>;
  fontSize: GetStyleValue<'fontSize'>;
}

export interface StyleProps {
  display?: ResponsiveStyleProp<
    'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
  >;
  flexDirection?: ResponsiveStyleProp<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  flexGrow?: ResponsiveStyleProp<0 | 1>;
  flexShrink?: ResponsiveStyleProp<0>;
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
  padding?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  paddingBottom?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  paddingLeft?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  paddingRight?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  paddingTop?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  paddingX?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  paddingY?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  position?: ResponsiveStyleProp<'relative' | 'fixed' | 'absolute' | 'sticky'>;
  textAlign?: ResponsiveStyleProp<'left' | 'right' | 'center' | 'justify'>;
  textTransform?: ResponsiveStyleProp<'capitalise' | 'none' | 'uppercase' | 'lowercase'>;
  width?: ResponsiveStyleProp<'full'>;
  fontSize?: ResponsiveStyleProp<FinalBlocksTheming['fontSize']>;
  fontWeight?: ResponsiveStyleProp<'regular' | 'bold'>;
  color?: ResponsiveStyleProp<FinalBlocksTheming['colors']>;
  backgroundColor?: ResponsiveStyleProp<FinalBlocksTheming['colors']>;
  gridGap?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  columnGap?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  rowGap?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  negativeMarginTop?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  negativeMarginLeft?: ResponsiveStyleProp<FinalBlocksTheming['spacing']>;
  fontStyle?: ResponsiveStyleProp<'normal' | 'italic'>;
  gridAutoFlow?: ResponsiveStyleProp<'row' | 'column'>;
}
export declare type PickStyleProps<T extends keyof StyleProps> = Partial<Pick<StyleProps, T>>;
