import { Box } from 'Box';
import { cx } from 'cx';
import React, { Children, ReactNode } from 'react';
import { PickStyleProps, ResponsiveStyleProp, StyleProps } from '../useStyles';
import './Stack.css';

interface Props
  extends PickStyleProps<
    | 'padding'
    | 'paddingX'
    | 'paddingY'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
  > {
  align?: ResponsiveStyleProp<'flex-start' | 'center' | 'flex-end'>;
  children: ReactNode;
  component?: 'div' | 'ol' | 'ul';
  horizontal?: boolean;
  spacing: StyleProps['padding'];
  className?: string;
}

const Stack = ({
  align,
  children,
  component = 'div',
  spacing,
  horizontal = false,
  className,
}: Props) => {
  const items = Children.toArray(children);

  return (
    <Box
      className={cx('Stack', className)}
      component={component}
      display="flex"
      flexDirection={horizontal ? 'row' : 'column'}
      justifyContent={horizontal ? undefined : align}
      alignItems={align}
      negativeMarginTop={horizontal ? undefined : spacing}
      negativeMarginLeft={horizontal ? spacing : undefined}
    >
      {items.map((item, key) => (
        <Box
          key={key}
          paddingTop={horizontal ? undefined : spacing}
          paddingLeft={horizontal ? spacing : undefined}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
};

export default Stack;
