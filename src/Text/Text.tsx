import { Box } from 'Box';
import React from 'react';
import { PickStyleProps } from '../useStyles';
import './text.css';

interface Props extends PickStyleProps<'textAlign' | 'fontSize' | 'fontWeight' | 'color'> {
  component?: 'span' | 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Text = ({
  component = 'span',
  children,
  textAlign,
  fontSize = 'medium',
  fontWeight,
  color,
}: Props) => {
  return (
    <Box
      component={component}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
      display="block"
      className="Text"
      color={color}
    >
      {children}
    </Box>
  );
};

export default Text;
