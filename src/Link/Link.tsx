import { cx } from 'cx';
import React from 'react';
import { PickStyleProps, useStyles } from '../useStyles';
import './link.css';

interface Props extends PickStyleProps<'fontSize'> {
  children: React.ReactNode;
  to: string;
}

const Link = ({ children, to, fontSize }: Props) => {
  const linkStyles = useStyles({
    color: 'primary',
    fontSize,
  });

  return (
    <a href={`#${to}`} className={cx('Link', linkStyles)}>
      {children}
    </a>
  );
};

export default Link;
