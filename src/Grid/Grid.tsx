import { cx } from 'cx';
import React from 'react';
import { StyleProps, useStyles } from '../useStyles';

interface Props {
  children: React.ReactNode;
  className?: string;
  columns: 1 | 2 | 3 | 4 | 5 | 6;
  spacing: StyleProps['gridGap'];
}

const Grid = ({ children, className, spacing, columns }: Props) => {
  const gridStyles = useStyles({
    display: 'grid',
    gridGap: spacing,
  });

  return (
    <div
      className={cx(className, gridStyles)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
