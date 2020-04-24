import { Box } from 'Box';
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
  const childComponent = component === 'div' ? 'div' : 'li';
  const paddingBottom = !direction || direction === 'column' ? spacing : undefined;
  const paddingRight = direction === 'row' ? spacing : undefined;

  if (!length) {
    return null;
  }

  if (length <= 1) {
    return <>{children}</>;
  }

  return (
    <Box
      component={component}
      className="Stack"
      display={direction ? 'flex' : undefined}
      flexDirection={direction}
    >
      {stackItems.map((child, index) => (
        <Box
          component={childComponent}
          key={index}
          paddingBottom={paddingBottom}
          paddingRight={paddingRight}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Stack;
