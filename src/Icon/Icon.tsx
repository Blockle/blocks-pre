import React from 'react';
import { BlockleBlocks, useStyles } from 'useStyles';
import { cx } from '../cx';
import './icon.css';
import ArrowLeft from './icons/sm-arrow-left.svg';
import ArrowRight from './icons/sm-arrow-right.svg';
import Briefcase from './icons/sm-briefcase.svg';
import Calendar from './icons/sm-calendar.svg';
import Check from './icons/sm-check.svg';
import ArrowBack from './icons/sm-cheveron-left.svg';
import Clipboard from './icons/sm-clipboard.svg';
import Cog from './icons/sm-cog.svg';
import Exclamation from './icons/sm-exclamation.svg';
import Plus from './icons/sm-plus.svg';
import Cross from './icons/sm-x.svg';

const ICON_MAP = {
  arrowBack: ArrowBack,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  briefcase: Briefcase,
  calendar: Calendar,
  check: Check,
  clipboard: Clipboard,
  cog: Cog,
  cross: Cross,
  plus: Plus,
  exclamation: Exclamation,
};

export type IconNames = keyof typeof ICON_MAP;

export interface Props extends Pick<BlockleBlocks, 'color'> {
  label: string;
  name: IconNames;
  size?: 'small' | 'medium' | 'large';
}

const Icon = ({ label, name, size = 'medium', color = 'white' }: Props) => {
  const iconStyles = useStyles({
    color,
  });

  if (!ICON_MAP[name]) {
    console.warn(`<Icon name="${name}" />`);
    return null;
  }

  return (
    <span className={cx('Icon', `size-${size}`, iconStyles)} title={label}>
      {React.createElement(ICON_MAP[name], {
        className: 'icon-svg',
        'data-testid': 'icon-svg',
      })}
    </span>
  );
};

export default Icon;
