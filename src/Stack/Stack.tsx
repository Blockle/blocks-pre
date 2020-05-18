import { Box } from 'Box';
import { cx } from 'cx';
import React, { Children, ReactNode } from 'react';
import { PickStyleProps, StyleProps } from '../useStyles';
import './stack.css';

interface Props extends PickStyleProps<'textAlign'> {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  spacing: StyleProps['padding'];
  direction?: 'column' | 'row';
}

const Stack = ({ children, component = 'div', spacing, direction }: Props) => {
  const stackItems = Children.toArray(children);
  const length = stackItems.length;

  if (!length) {
    return null;
  }

  if (length <= 1) {
    return <>{children}</>;
  }

  return (
    <Box
      component={component}
      className={cx('Stack', `spacing-${spacing}`, direction && `direction-${direction}`)}
      display={direction ? 'flex' : undefined}
      flexDirection={direction}
    >
      {children}
    </Box>
  );
};

export default Stack;
