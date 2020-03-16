import React, { Children, ReactNode } from 'react';
import { Box } from '../Box';
import { BlockleBlocks } from '../useStyles';
import './stack.css';

interface Props {
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  space?: BlockleBlocks['padding'];
  textAlign?: BlockleBlocks['textAlign'];
}

const Stack = ({ children, component = 'div', space, textAlign }: Props) => {
  const stackItems = Children.toArray(children);
  const length = stackItems.length;

  if (!length) {
    return null;
  }

  if (length <= 1) {
    return <>{children}</>;
  }

  return (
    <Box component={component} className="Stack" textAlign={textAlign}>
      {stackItems.map((child, index) => (
        <Box key={index} paddingBottom={space}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Stack;
