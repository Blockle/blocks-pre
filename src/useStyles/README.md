# useStyles

```tsx
import { useStyles } from '@blockle/blocks';

const Pony = () => {
  const styles = useStyles({ padding: 'small' });

  return <div className={styles}>Hello</div>;
};
```

## Theming

```css
:root {
  /* Spacing */
  --space-gutter: 12px;
  --space-xsmall: 2px;
  --space-small: 4px;
  --space-medium: 8px;
  --space-large: 16px;
  --space-xlarge: 32px;
}
```
