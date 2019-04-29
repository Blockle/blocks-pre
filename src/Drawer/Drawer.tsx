import React from 'react';

import './drawer.css';
import { classNames } from 'classNames';

type Props = {
  children: React.ReactNode;
  onRequestClose: () => void;
  open: boolean;
  position?: 'left' | 'right';
};

const Drawer = ({ children, onRequestClose, open, position = 'left' }: Props) => {
  return (
    <>
      <div className={classNames('Drawer-Back', open && 'is-open')} onClick={onRequestClose} />
      <div className={classNames('Drawer', `position-${position}`, open && 'is-open')}>
        {children}
      </div>
    </>
  );
};

export default Drawer;
