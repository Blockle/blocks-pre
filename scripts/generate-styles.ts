import { BBStyles } from '../src/useStyles/useStyles';
const { writeFileSync } = require('fs');

type CSSValue = string | number;
interface CSSProperty {
  property: string;
  values:
    | CSSValue[]
    | {
        [name: string]: CSSValue;
      };
}

type Styles = {
  [P in keyof BBStyles]: CSSProperty;
};

const breakpoints = [0, 740, 992];
const space = {
  gutter: 'var(--space-gutter)',
  xsmall: 'var(--space-xsmall)',
  small: 'var(--space-small)',
  medium: 'var(--space-medium)',
  large: 'var(--space-large)',
  xlarge: 'var(--space-xlarge)',
};

const baseStyles: Styles = {
  alignItems: {
    property: 'align-items',
    values: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'],
  },
  background: {
    property: 'background-color',
    values: {
      card: 'var(--background-card, #fff)',
    },
  },
  display: {
    property: 'display',
    values: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'none'],
  },
  flexDirection: {
    property: 'flex-direction',
    values: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  flexGrow: {
    property: 'flex-grow',
    values: [0, 1],
  },
  flexShrink: {
    property: 'flex-shrink',
    values: [0],
  },
  flexWrap: {
    property: 'flex-wrap',
    values: ['nowrap', 'wrap', 'wrap-reverse'],
  },
  height: {
    property: 'height',
    values: {
      full: '100%',
    },
  },
  justifyContent: {
    property: 'justify-content',
    values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  },
  overflow: {
    property: 'overflow',
    values: ['auto', 'scroll', 'hidden', 'visible'],
  },
  padding: {
    property: 'padding',
    values: space,
  },
  paddingBottom: {
    property: 'padding-bottom',
    values: space,
  },
  paddingLeft: {
    property: 'padding-left',
    values: space,
  },
  paddingRight: {
    property: 'padding-right',
    values: space,
  },
  paddingTop: {
    property: 'padding-top',
    values: space,
  },
  // TODO
  paddingX: {
    property: 'padding-left',
    values: space,
  },
  // TODO
  paddingY: {
    property: 'padding-top',
    values: space,
  },
  textAlign: {
    property: 'text-align',
    values: ['left', 'right', 'center', 'justify'],
  },
  width: {
    property: 'width',
    values: { full: '100%' },
  },
};

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

// export function dasherize(value: string) {
//   return value.replace(/[A-Z]/g, v => `-${v.toLowerCase()}`);
// }

function formatProperty(
  buffer: string[],
  name: string,
  property: string,
  value: CSSValue,
  className?: string,
) {
  buffer.push(`.bb-${name}-${className || value} {`);
  buffer.push(`  ${property}: ${value};`);
  buffer.push(`}`);

  breakpoints.forEach((breakpoint, i) => {
    if (i === 0) {
      return;
    }

    buffer.push(``);
    buffer.push(`@media (min-width: ${breakpoint}px) {`);
    buffer.push(`  .bb-${name}-${className || value}-${getResponsiveName(i)} {`);
    buffer.push(`    ${property}: ${value};`);
    buffer.push(`  }`);
    buffer.push(`}`);
  });

  buffer.push(``);
}

function formatItem(name: keyof Styles) {
  const output: string[] = [];
  const spec = baseStyles[name];

  if (!spec) {
    throw new Error(`Undefined ${name}`);
  }

  const { property, values } = spec;

  if (Array.isArray(values)) {
    values.forEach(value => {
      formatProperty(output, name, property, value);
    });
  } else {
    Object.keys(values).forEach(key => {
      formatProperty(output, name, property, values[key], key);
    });
  }

  return output.join('\n');
}

const data = (Object.keys(baseStyles) as Array<keyof typeof baseStyles>).map(key =>
  formatItem(key),
);

writeFileSync('./use-styles.css', data.join('\n'));
