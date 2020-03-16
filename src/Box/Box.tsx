import { createElement, ElementType, forwardRef, ReactNode } from 'react';
import { cx } from '../cx';
import { BlockleBlocks, useStyles } from '../useStyles';

// AllHTMLAttributes<HTMLElement>?
interface Props extends BlockleBlocks {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
  htmlFor?: string;
}

const Box = forwardRef(
  (
    {
      alignItems,
      background,
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
      background,
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
        className: cx(boxStyles, className),
        ...restProps,
      },
      children,
    );
  },
);

export default Box;
