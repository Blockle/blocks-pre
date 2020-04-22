import React, { Children, createElement, forwardRef, ReactNode } from 'react';
import { PickStyleProps, StyleProps, useStyles } from '../useStyles';
import './stack.css';

interface Props extends PickStyleProps<'textAlign'> {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  gap?: StyleProps['gapY'];
}

const Stack = forwardRef(({ children, component = 'div', gap }: Props, ref) => {
  const stackItems = Children.toArray(children);
  const length = stackItems.length;
  const stackStyles = useStyles({
    display: 'grid',
    gapY: gap,
  });

  if (!length) {
    return null;
  }

  if (length <= 1) {
    return <>{children}</>;
  }

  return createElement(component, { ref, className: stackStyles }, children);
});

export default Stack;
