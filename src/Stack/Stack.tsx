import React, { Children, ReactNode } from 'react';
import { Box } from '../Box';
import { BBStyles } from '../useStyles/useStyles';
import './stack.css';

// type Space = 'gutter' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'none';
// type Spacing = Space | [Space, Space] | [Space, Space, Space];

interface Props extends BBStyles {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  space?: BBStyles['padding'];
}

const Stack = ({ children, component = 'div', space, ...styleProps }: Props) => {
  const stackItems = Children.toArray(children);
  const length = stackItems.length;

  if (!length) {
    return null;
  }

  if (length <= 1) {
    return <>{children}</>;
  }

  return (
    <Box component={component} className="Stack" {...styleProps}>
      {stackItems.map((child, index) => (
        <Box key={index} paddingBottom={space}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Stack;
