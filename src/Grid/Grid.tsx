import { cx } from 'cx';
import React from 'react';
import { StyleProps, useStyles } from '../useStyles';
import './grid.css';

interface Props {
  children: React.ReactNode;
  columns: 1 | 2 | 3 | 4 | 5 | 6;
  spacing: StyleProps['gridGap'];
}

const Grid = ({ children, spacing, columns }: Props) => {
  const gridStyles = useStyles({
    gridGap: spacing,
  });

  return (
    <div
      className={cx('Grid', gridStyles)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
