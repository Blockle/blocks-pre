import { Box } from 'Box';
import { cx } from 'cx';
import { FC, ReactNode } from 'react';
import { ResponsiveStyleProp, StyleProps } from '../useStyles';
import './Stack.css';

interface Props {
  align?: ResponsiveStyleProp<'stretch' | 'start' | 'center' | 'end'>;
  children: ReactNode;
  className?: string;
  component?: 'div' | 'ol' | 'ul';
  horizontal?: boolean;
  // inline?: boolean;
  spacing: StyleProps['padding'];
  width?: 'auto' | 'full';
  direction?: 'row' | 'column';
}

// <Stack direction="row|column" spacing="" inline>...</Stack>

const Stack: FC<Props> = ({
  align,
  children,
  className,
  component = 'div',
  horizontal = false,
  // inline = false,
  width = 'full',
  spacing,
}) => {
  return (
    <Box
      className={cx('Stack', width === 'auto' && 'is-auto', className)}
      component={component}
      // display="grid"
      display={width === 'full' ? 'grid' : 'inline-grid'}
      gridAutoFlow={horizontal ? 'column' : 'row'}
      justifyItems={horizontal ? undefined : align}
      alignItems={horizontal ? align : undefined}
      rowGap={horizontal ? undefined : spacing}
      columnGap={horizontal ? spacing : undefined}
      style={{ gridAutoColumns: width === 'auto' ? 'max-content' : undefined }}
    >
      {children}
    </Box>
  );
};

export default Stack;
