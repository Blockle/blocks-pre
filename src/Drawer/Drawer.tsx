import { FC, ReactNode } from 'react';
import { cx } from '../cx';
import './drawer.css';

interface Props {
  children: ReactNode;
  onRequestClose: () => void;
  open: boolean;
  position?: 'left' | 'right';
}

const Drawer: FC<Props> = ({ children, onRequestClose, open, position = 'left' }) => {
  return (
    <>
      <div className={cx('Drawer-Back', open && 'is-open')} onClick={onRequestClose} />
      <div className={cx('Drawer', `position-${position}`, open && 'is-open')}>{children}</div>
    </>
  );
};

export default Drawer;
