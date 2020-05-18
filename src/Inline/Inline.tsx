import React from 'react';
import { Box } from '../Box';
import { StyleProps } from '../useStyles';
import './inline.css';

interface Props {
  children: React.ReactNode;
  spacing: StyleProps['padding'];
}

const Inline = ({ children, spacing }: Props) => {
  return (
    <Box className="Inline" display="flex" flexWrap="wrap" stackGap={spacing}>
      {children}
    </Box>
  );
};

export default Inline;
