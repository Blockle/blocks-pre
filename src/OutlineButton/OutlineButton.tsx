import React from 'react';
import { cx } from '../cx';
import { Ripple } from '../Ripple';
import { PickStyleProps, useStyles } from '../useStyles';
import './outline-button.css';

interface Props extends PickStyleProps<'width'> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  type?: 'button' | 'submit';
}

const OutlineButton = ({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  width,
}: Props) => {
  const buttonStyles = useStyles({
    width,
    paddingX: 'xlarge',
    paddingY: 'large',
    fontSize: 'small',
    color: disabled ? 'light' : 'primary',
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
      className={cx('OutlineButton', disabled && 'is-disabled', buttonStyles, className)}
    >
      {children}
    </Ripple>
  );
};

export default OutlineButton;
