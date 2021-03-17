import { FC, ReactNode } from 'react';
import './badge.css';

interface Props {
  children: ReactNode;
}

const Badge: FC<Props> = ({ children }) => <div className="Badge">{children}</div>;

export default Badge;
