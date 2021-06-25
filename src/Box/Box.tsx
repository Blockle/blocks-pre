import {
  AllHTMLAttributes,
  createElement,
  CSSProperties,
  ElementType,
  forwardRef,
  ReactNode,
} from 'react';
import { cx } from '../cx';
import { StyleProps, useStyles } from '../useStyles';

interface Props
  extends StyleProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'color' | 'width' | 'height'> {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  htmlFor?: string;
  style?: CSSProperties;
}

const Box = forwardRef<HTMLElement, Props>(
  (
    {
      alignItems,
      backgroundColor,
      children,
      className,
      color,
      columnGap,
      component = 'div',
      display,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      fontSize,
      fontStyle,
      fontWeight,
      gridAutoFlow,
      height,
      justifyContent,
      justifyItems,
      negativeMarginLeft,
      negativeMarginTop,
      overflow,
      overflowX,
      overflowY,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY,
      position,
      rowGap,
      textAlign,
      textTransform,
      width,
      ...restProps
    },
    ref,
  ) => {
    const boxStyles = useStyles({
      alignItems,
      backgroundColor,
      color,
      columnGap,
      display,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      fontSize,
      fontStyle,
      fontWeight,
      gridAutoFlow,
      height,
      justifyContent,
      justifyItems,
      negativeMarginLeft,
      negativeMarginTop,
      overflow,
      overflowX,
      overflowY,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY,
      position,
      rowGap,
      textAlign,
      textTransform,
      width,
    });

    return createElement(
      component,
      {
        ref,
        className: cx(className, boxStyles),
        ...restProps,
      },
      children,
    );
  },
);

Box.displayName = 'Box';

export default Box;
