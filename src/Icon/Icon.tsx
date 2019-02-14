import React from 'react';
import classNames from 'classnames';

import './icon.css';
import ArrowBack from './icons/arrow-back.svg';
import Assignment from './icons/assignment.svg';
import Bookmark from './icons/bookmark.svg';
import Check from './icons/check.svg';
import Close from './icons/close.svg';
import Envelope from './icons/envelope.svg';
import Error from './icons/error.svg';
import More from './icons/more.svg';
import School from './icons/school.svg';
import Settings from './icons/settings.svg';
import Warning from './icons/warning.svg';
import Work from './icons/work.svg';

const ICON_MAP = {
  arrowBack: ArrowBack,
  assignment: Assignment,
  bookmark: Bookmark,
  check: Check,
  close: Close,
  envelope: Envelope,
  error: Error,
  more: More,
  school: School,
  settings: Settings,
  warning: Warning,
  work: Work,
};

export type IconNames = keyof typeof ICON_MAP;

export interface Props {
  label: string;
  name: IconNames;
  size?: 'small' | 'medium' | 'large';
  accent?: 'primary' | 'secondary' | 'tertiary';
}

const Icon: React.SFC<Props> = ({ label, name, size, accent }) => (
  <span
    className={classNames(`Icon size-${size}`, accent && `accent-${accent}`)}
    title={label}
  >
    {React.createElement(ICON_MAP[name], {
      className: 'icon-svg',
      'data-testid': 'icon-svg',
    })}
  </span >
);

Icon.defaultProps = {
  size: 'medium',
};

export default Icon;
