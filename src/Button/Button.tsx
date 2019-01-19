import React from 'react';
import classNames from 'classnames';

import './button.css';
import { Ripple } from '../Ripple';
import { Icon, IconNames } from '../Icon';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  flat?: boolean;
  icon?: IconNames;
  inline?: boolean;
  onClick?(): void;
  secondary?: boolean;
}

const Button: React.SFC<Props> = ({ children, disabled, flat, icon, inline, onClick, secondary }) => (
  <Ripple
    renderAs="button"
    disabled={disabled}
    onClick={onClick}
    className={classNames(!flat ? 'Button' : 'FlatButton', {
      'is-inline': inline,
      'is-secondary': secondary,
      'is-disabled': disabled,
      'has-icon': !!icon,
    })}
  >
    {icon &&
      <Icon name={icon} label="" size="small" />}

    {children}
  </Ripple>
);

Button.defaultProps = {

};

export default Button;
