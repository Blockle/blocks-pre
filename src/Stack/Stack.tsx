import React, { Children, ReactNode } from 'react';
import { Box } from '../Box';
import { PickStyleProps, StyleProps } from '../useStyles';
import './stack.css';

interface Props extends PickStyleProps<'textAlign'> {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  gap?: StyleProps['padding'];
}

const Stack = ({ children, component = 'div', gap, textAlign }: Props) => {
  const stackItems = Children.toArray(children);
  const length = stackItems.length;
  const childComponent = component === 'div' ? 'div' : 'li';

  if (!length) {
    return null;
  }

  if (length <= 1) {
    return <>{children}</>;
  }

  return (
    <Box component={component} className="Stack" textAlign={textAlign}>
      {stackItems.map((child, index) => (
        <Box component={childComponent} key={index} paddingBottom={gap}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Stack;
