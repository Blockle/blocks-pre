import React from 'react';
import { cx } from '../cx';
import './drawer.css';

type Props = {
  children: React.ReactNode;
  onRequestClose: () => void;
  open: boolean;
  position?: 'left' | 'right';
};

const Drawer = ({ children, onRequestClose, open, position = 'left' }: Props) => {
  return (
    <>
      <div className={cx('Drawer-Back', open && 'is-open')} onClick={onRequestClose} />
      <div className={cx('Drawer', `position-${position}`, open && 'is-open')}>{children}</div>
    </>
  );
};

export default Drawer;
