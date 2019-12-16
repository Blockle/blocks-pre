type Args = null | undefined | boolean | string;

export const cx = (...args: Args[]) => args.filter(arg => arg && typeof arg === 'string').join(' ');
