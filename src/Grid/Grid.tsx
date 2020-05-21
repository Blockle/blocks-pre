import React from 'react';
import { StyleProps } from 'useStyles';
import { Box } from '../Box';
import './grid.css';

interface Props {
  children: React.ReactNode;
  columns: 1 | 2 | 3 | 4 | 5 | 6;
  space: StyleProps['stackGap'];
}

const Grid = ({ children, space, columns }: Props) => {
  return (
    <Box
      className="Grid"
      stackGap={space}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </Box>
  );
};

export default Grid;
