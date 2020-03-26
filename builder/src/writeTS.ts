import { BlockleTheme } from './types';

const { writeFileSync } = require('fs');

export function writeTS(filename: string, theme: BlockleTheme) {
  console.log(`writeTS ${filename}`);

  const buffer: string[] = [];
  const styles = Object.keys(theme.styles);

  buffer.push('type ResponsiveStyle<T extends string | number> = T | T[];');
  buffer.push('');
  buffer.push('export interface BlockleBlocks {');

  styles.forEach(name => {
    const style = theme.styles[name];
    const values = Object.keys(style).map(value => (isNaN(value as any) ? `'${value}'` : value));

    buffer.push(`  ${name}?: ResponsiveStyle<${values.join(' | ')}>;`);
  });

  buffer.push('}');
  buffer.push('');
  buffer.push(
    'export type PickBlocks<T extends keyof BlockleBlocks> = Partial<Pick<BlockleBlocks, T>>;',
  );

  writeFileSync(filename, buffer.join('\n'));
}
