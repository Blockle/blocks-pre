import React from 'react';
import classNames from 'classnames';

import './icon-button.css';
import { Ripple } from '../Ripple';
import { Icon, IconNames } from '../Icon';

interface Props {
  disabled?: boolean;
  label: string;
  name: IconNames;
  onClick?(): void;
  secondary?: boolean;
}

const Button: React.SFC<Props> = ({ disabled, label, name, onClick, secondary }) => (
  <Ripple
    renderAs="button"
    disabled={disabled}
    onClick={onClick}
    className={classNames('IconButton', {
      'is-secondary': secondary,
      'is-disabled': disabled,
    })}
  >
    <Icon name={name} label={label} size="medium" accent="secondary" />
  </Ripple>
);

Button.defaultProps = {

};

export default Button;
