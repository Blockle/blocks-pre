import './blockle-blocks.css';
import { BlockleBlocks } from './blocks';

// bb -> blockle blocks
// useStyles({ padding: 'small', background: 'card' }); -> 'bb-padding-small bb-background-card'

function getResponsiveName(index: number) {
  switch (index) {
    case 0:
      return 'mobile';
    case 1:
      return 'tablet';
    case 2:
      return 'desktop';
    default:
      throw new Error(`useStyles() - Uknown index "${index}"`);
  }
}

export const useStyles = (styles: BlockleBlocks) => {
  const keys = Object.keys(styles) as Array<keyof BlockleBlocks>;
  const classList: string[] = [];

  keys.forEach(key => {
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
          classList.push(`bb-${key}-${val}-${getResponsiveName(i)}`);
        }
      }
    } else {
      classList.push(`bb-${key}-${value}`);
    }
  });

  return classList.join(' ');
};

// TODO Remove me
export const useStylesTimed = (styles: BlockleBlocks) => {
  console.time('useStyle');
  const classList = useStyles(styles);
  console.timeEnd('useStyle');

  return classList;
};
