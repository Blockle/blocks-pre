import { Box } from 'Box';
import { cx } from 'cx';
import { FC, ReactNode } from 'react';
import { PickStyleProps } from '../useStyles';
import './text.css';

interface Props
  extends PickStyleProps<'textAlign' | 'fontSize' | 'fontWeight' | 'color' | 'fontStyle'> {
  component?: 'span' | 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

const Text: FC<Props> = ({
  component = 'span',
  children,
  textAlign,
  fontSize = 'medium',
  fontWeight,
  color,
  fontStyle,
  className,
}) => {
  return (
    <Box
      component={component}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      display="block"
      className={cx('Text', className)}
      color={color}
    >
      {children}
    </Box>
  );
};

export default Text;
