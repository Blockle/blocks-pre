import React from 'react';
import { cx } from '../cx';
import { Ripple } from '../Ripple';
import { PickBlocks, useStyles } from '../useStyles';
import './flat-button.css';

interface Props extends PickBlocks<'width'> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  secondary?: boolean;
  type?: 'button' | 'submit';
}

const FlatButton = ({
  children,
  className,
  disabled,
  onClick,
  secondary,
  type = 'button',
  width,
}: Props) => {
  const buttonStyles = useStyles({
    width,
    paddingX: 'xlarge',
    paddingY: 'large',
    fontSize: 'small',
    color: disabled ? 'light' : secondary ? 'primary' : 'dark',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  return (
    <Ripple
      component="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cx('FlatButton', disabled && 'is-disabled', buttonStyles, className)}
    >
      {children}
    </Ripple>
  );
};

export default FlatButton;
