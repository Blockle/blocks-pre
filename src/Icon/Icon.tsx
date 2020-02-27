import React from 'react';
import { cx } from '../cx';
import './icon.css';
import Add from './icons/add.svg';
import ArrowBack from './icons/arrow-back.svg';
import ArrowLeft from './icons/arrow-left.svg';
import ArrowRight from './icons/arrow-right.svg';
import Assignment from './icons/assignment.svg';
import Bookmark from './icons/bookmark.svg';
import Check from './icons/check.svg';
import Close from './icons/close.svg';
import Envelope from './icons/envelope.svg';
import Error from './icons/error.svg';
import Event from './icons/event.svg';
import Location from './icons/location.svg';
import Menu from './icons/menu.svg';
import More from './icons/more.svg';
import Notification from './icons/notification.svg';
import School from './icons/school.svg';
import Settings from './icons/settings.svg';
import Warning from './icons/warning.svg';
import Work from './icons/work.svg';

const ICON_MAP = {
  add: Add,
  arrowBack: ArrowBack,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  assignment: Assignment,
  bookmark: Bookmark,
  check: Check,
  close: Close,
  envelope: Envelope,
  error: Error,
  event: Event,
  location: Location,
  menu: Menu,
  more: More,
  notification: Notification,
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

const Icon = ({ label, name, size = 'medium', accent }: Props) => (
  <span className={cx(`Icon size-${size}`, accent && `accent-${accent}`)} title={label}>
    {React.createElement(ICON_MAP[name], {
      className: 'icon-svg',
      'data-testid': 'icon-svg',
    })}
  </span>
);

export default Icon;
