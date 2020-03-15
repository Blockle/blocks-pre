import { cx } from 'cx';
import React from 'react';
import { useStyles } from 'useStyles';
import './heading.css';

interface Props {
  textAlign?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  // tone: ''
}

const Heading = ({ children, level = 1, size = 'medium', textAlign = 'left' }: Props) => {
  const headingStyles = useStyles({
    textAlign,
  });

  return React.createElement(
    `h${level}`,
    {
      className: cx('Heading', headingStyles, `size-${size}`),
    },
    children,
  );
};

export default Heading;
