import { createElement, ElementType, ReactNode } from 'react';
import { cx } from '../cx';
import { BBStyles, useStyles } from '../useStyles/useStyles';

// AllHTMLAttributes<HTMLElement>?
interface Props extends BBStyles {
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}

const Box = ({
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
  textAlign,
  width,
  ...restProps
}: Props) => {
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
    textAlign,
    width,
  });

  return createElement(
    component,
    {
      className: cx('Box', boxStyles, className),
      ...restProps,
    },
    children,
  );
};

export default Box;
