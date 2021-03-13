import { FC } from 'react';
import { cx } from '../cx';
import { Icon, IconNames } from '../Icon';
import { RippleBox } from '../RippleBox';
import './icon-button.css';

interface Props {
  disabled?: boolean;
  label: string;
  name: IconNames;
  onClick?(): void;
  secondary?: boolean;
}

const IconButton: FC<Props> = ({ disabled, label, name, onClick, secondary }) => {
  return (
    <RippleBox
      disabled={disabled}
      onClick={onClick}
      className={cx('IconButton', secondary && 'is-secondary', disabled && 'is-disabled')}
    >
      <Icon name={name} label={label} size="medium" color={disabled ? 'gray' : 'black'} />
    </RippleBox>
  );
};

export default IconButton;
