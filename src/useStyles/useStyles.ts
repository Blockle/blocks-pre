import './blockle-blocks.css';
import { StyleProps } from './blocks';

// bb -> blockle blocks
// useStyles({ padding: 'small', background: 'card' }); -> 'bb-padding-small bb-background-card'

export const useStyles = (styles: StyleProps) => {
  const keys = Object.keys(styles) as Array<keyof StyleProps>;
  const classList: string[] = [];

  keys.forEach((key) => {
    const value = styles[key];

    if (value === undefined) {
      return;
    }

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const val = value[i];

        if (i === 0) {
          classList.push(`bb-${key}-${val}`);
        } else {
          classList.push(`bb-${key}-${val}-bp${i}`);
        }
      }
    } else {
      classList.push(`bb-${key}-${value}`);
    }
  });

  return classList.join(' ');
};
