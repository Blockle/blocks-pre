import React, { AllHTMLAttributes, ElementType } from 'react';
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

const RippleBox = ({ children, component = 'div', ...props }: Props) => {
  props[startType] = createRipple;

  return (
    <Box component={component} overflow="hidden" position="relative" {...props}>
      {children}
    </Box>
  );
};

export default RippleBox;
