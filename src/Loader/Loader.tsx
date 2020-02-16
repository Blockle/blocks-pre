import React from 'react';
import { Icon } from 'Icon';

import './loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <Icon name="work" label="Loading" accent="secondary" />
    </div>
  );
};

export default Loader;
