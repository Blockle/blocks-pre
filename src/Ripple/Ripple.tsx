import React, { AllHTMLAttributes, ElementType } from 'react';
import { StyleProps } from '..';
import { Box } from '../Box';
import { useRippleEffect } from '../useRippleEffect';
import './ripple.css';

interface Props
  extends StyleProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'color' | 'width' | 'height'> {
  children: React.ReactNode;
  component: ElementType;
}

const Ripple = ({ children, component, ...props }: Props) => {
  const ref = useRippleEffect();

  return (
    <Box ref={ref} component={component} {...props}>
      {children}
    </Box>
  );
};

export default Ripple;
