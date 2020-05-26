import { Box } from 'Box';
import { cx } from 'cx';
import React, { Children, ReactNode } from 'react';
import { ResponsiveStyleProp, StyleProps } from '../useStyles';
import './stack.css';

interface Props {
  align?: ResponsiveStyleProp<'flex-start' | 'center' | 'flex-end'>;
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  horizontal?: boolean;
  spacing: StyleProps['padding'];
}

const Stack = ({ align, children, component = 'div', spacing, horizontal = false }: Props) => {
  const items = Children.toArray(children);

  return (
    <Box
      component={component}
      className={cx('Stack', horizontal && 'horizontal')}
      display="flex"
      flexDirection={horizontal ? 'row' : 'column'}
      justifyContent={horizontal ? undefined : align}
      alignItems={align}
    >
      {items.map((item, key) => {
        return (
          <Box
            key={key}
            paddingBottom={horizontal ? undefined : spacing}
            paddingRight={horizontal ? spacing : undefined}
          >
            {item}
          </Box>
        );
      })}
    </Box>
  );
};

export default Stack;
