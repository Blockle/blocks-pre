import { cx } from 'cx';
import React from 'react';
import { PickBlocks, useStyles } from '../useStyles';
import './heading.css';

interface Props extends PickBlocks<'fontSize' | 'textAlign'> {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, level = 1, fontSize = 'medium', textAlign = 'left' }: Props) => {
  const headingStyles = useStyles({
    textAlign,
    fontSize,
    fontWeight: 'bold',
  });

  return React.createElement(
    `h${level}`,
    {
      className: cx('Heading', headingStyles),
    },
    children,
  );
};

export default Heading;
