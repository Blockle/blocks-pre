import React, { Children, ReactNode } from 'react';
import { Box } from '../Box';
import { PickStyleProps, StyleProps } from '../useStyles';
import './stack.css';

interface Props extends PickStyleProps<'textAlign'> {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  space?: StyleProps['padding'];
}

const Stack = ({ children, component = 'div', space, textAlign }: Props) => {
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
        <Box component={childComponent} key={index} paddingBottom={space}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Stack;
