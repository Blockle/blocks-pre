import React from 'react';
import { cx } from '../cx';
import { Ripple } from '../Ripple';
import { PickStyleProps, useStyles } from '../useStyles';
import './flat-button.css';

interface Props extends PickStyleProps<'width'> {
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
    paddingX: 'large',
    paddingY: 'small',
    fontSize: 'small',
    color: disabled ? 'gray' : secondary ? 'primary' : 'secondary',
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
