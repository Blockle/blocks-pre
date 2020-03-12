import { Box } from 'Box';
import React from 'react';
import './text.css';

type Props = {
  component?: 'span' | 'p' | 'strong';
  textAlign?: 'left' | 'center' | 'right';
  // dark?: boolean;
  // bold?: boolean;
  children: React.ReactNode;
  size?: 'small' | 'medium';
  weight?: 'regular' | 'medium' | 'strong';
  // tone / color / ???
};

const Text = ({ component = 'span', children, textAlign }: Props) => {
  return (
    <Box component={component} textAlign={textAlign} display="block">
      {children}
    </Box>
  );
};

// (
//   <p className={cx(`text align-${align} size-${size}`, bold && 'is-bold', dark && 'is-dark')}>
//     {children}
//   </p>
// );

export default Text;
