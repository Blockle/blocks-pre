import { Box } from 'Box';
import { cx } from 'cx';
import React, { Children, ReactNode } from 'react';
import { StyleProps } from '../useStyles';
import './stack.css';

interface Props {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  spacing: StyleProps['padding'];
  horizontal?: boolean;
}

const Stack = ({ children, component = 'div', spacing, horizontal = false }: Props) => {
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
      className={cx('Stack', horizontal && 'horizontal')}
      display={horizontal ? 'flex' : undefined}
      flexDirection={horizontal ? 'row' : undefined}
      stackGap={spacing}
    >
      {children}
    </Box>
  );
};

export default Stack;
