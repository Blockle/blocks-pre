import { createElement, ElementType, forwardRef, ReactNode } from 'react';
import { cx } from '../cx';
import { BBStyles, useStyles } from '../useStyles/useStyles';

// AllHTMLAttributes<HTMLElement>?
interface Props extends BBStyles {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

const Box = forwardRef(
  (
    {
      children,
      className,
      component = 'div',
      alignItems,
      background,
      display,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      justifyContent,
      overflow,
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
      display,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      justifyContent,
      overflow,
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
