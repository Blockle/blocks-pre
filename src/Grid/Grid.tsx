import { cx } from 'cx';
import { FC } from 'react';
import { StyleProps, useStyles } from '../useStyles';

interface Props {
  children: React.ReactNode;
  className?: string;
  columns: 1 | 2 | 3 | 4 | 5 | 6;
  spacing: StyleProps['gridGap'];
}

const Grid: FC<Props> = ({ children, className, spacing, columns }) => {
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
