import { cx } from 'cx';
import React from 'react';
import { BlockleBlocks, useStyles } from 'useStyles';
import './heading.css';

interface Props extends Pick<BlockleBlocks, 'fontSize' | 'textAlign'> {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, level = 1, fontSize = 'medium', textAlign = 'left' }: Props) => {
  const headingStyles = useStyles({
    textAlign,
    fontSize,
    fontWeight: 'semi-bold',
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
