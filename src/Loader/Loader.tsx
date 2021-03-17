import { FC } from 'react';
import { Icon } from '../Icon';
import './loader.css';

const Loader: FC = () => {
  return (
    <div className="Loader">
      <Icon name="briefcase" label="Loading" color="secondary" />
    </div>
  );
};

export default Loader;
