import { cx } from 'cx';
import { FC, ReactNode } from 'react';
import { PickStyleProps, useStyles } from '../useStyles';
import './link.css';

interface Props extends PickStyleProps<'fontSize'> {
  children: ReactNode;
  to: string;
}

const Link: FC<Props> = ({ children, to, fontSize }) => {
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
