import { Box } from 'Box';
import React, { Children, ReactNode } from 'react';
import { ResponsiveStyleProp, StyleProps } from '../useStyles';

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
      display="flex"
      flexDirection={horizontal ? 'row' : 'column'}
      justifyContent={horizontal ? undefined : align}
      alignItems={align}
      negativeMarginTop={horizontal ? undefined : spacing}
      negativeMarginLeft={horizontal ? spacing : undefined}
    >
      {items.map((item, key) => {
        return (
          <Box
            key={key}
            paddingTop={horizontal ? undefined : spacing}
            paddingLeft={horizontal ? spacing : undefined}
          >
            {item}
          </Box>
        );
      })}
    </Box>
  );
};

export default Stack;
