import React from 'react';
import { Box } from '../Box';
import { StyleProps } from '../useStyles';
import './grid.css';

interface Props {
  children: React.ReactNode;
  columns: 1 | 2 | 3 | 4 | 5 | 6;
  spacing: StyleProps['stackGap'];
}

const Grid = ({ children, spacing, columns }: Props) => {
  return (
    <Box
      className="Grid"
      stackGap={spacing}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </Box>
  );
};

export default Grid;
