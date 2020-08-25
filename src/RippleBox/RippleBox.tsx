import React, { AllHTMLAttributes, ElementType, forwardRef } from 'react';
import { StyleProps } from '..';
import { Box } from '../Box';
import { createRipple } from './createRipple';

interface Props
  extends StyleProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'color' | 'width' | 'height'> {
  children: React.ReactNode;
  component?: ElementType;
}

const isTouch = 'ontouchstart' in document;
const startType = isTouch ? 'onTouchStart' : 'onMouseDown';

const RippleBox = forwardRef(
  ({ children, component = 'div', color = 'primary', ...props }: Props, ref) => {
    props[startType] = createRipple;

    return (
      <Box
        ref={ref}
        component={component}
        overflow="hidden"
        position="relative"
        color={color}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

RippleBox.displayName = 'RippleBox';

export default RippleBox;
