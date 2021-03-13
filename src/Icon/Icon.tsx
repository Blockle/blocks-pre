import { createElement, FC } from 'react';
import { cx } from '../cx';
import { PickStyleProps, useStyles } from '../useStyles';
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
import Selector from './icons/sm-selector.svg';
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
  exclamation: Exclamation,
  plus: Plus,
  selector: Selector,
};

export type IconNames = keyof typeof ICON_MAP;

export interface Props extends PickStyleProps<'color'> {
  className?: string;
  label: string;
  name: IconNames;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

const Icon: FC<Props> = ({ className, label, name, size = 'medium', color = 'white' }) => {
  const iconStyles = useStyles({
    color,
  });

  if (!ICON_MAP[name]) {
    console.warn(`<Icon name="${name}" />`);
    return null;
  }

  return (
    <span className={cx('Icon', `size-${size}`, className, iconStyles)} title={label}>
      {createElement(ICON_MAP[name], {
        className: 'icon-svg',
        'data-testid': 'icon-svg',
      })}
    </span>
  );
};

export default Icon;
