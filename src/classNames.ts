type Args = null | undefined | boolean | string;

export const classNames = (...args: Args[]) =>
  args.filter(arg => arg && typeof arg === 'string').join(' ');

export const cx = classNames;
