import { AllHTMLAttributes, createElement, ElementType, forwardRef, ReactNode } from 'react';
import { cx } from '../cx';
import { StyleProps, useStyles } from '../useStyles';

interface Props
  extends StyleProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'color' | 'width' | 'height'> {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  htmlFor?: string;
}

const Box = forwardRef(
  (
    {
      alignItems,
      backgroundColor,
      children,
      className,
      color,
      component = 'div',
      display,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      fontSize,
      fontWeight,
      height,
      justifyContent,
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
      textAlign,
      width,
      ...restProps
    }: Props,
    ref,
  ) => {
    const boxStyles = useStyles({
      alignItems,
      backgroundColor,
      color,
      display,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      fontSize,
      fontWeight,
      height,
      justifyContent,
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
      textAlign,
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

export default Box;
