import { storiesOf } from '@storybook/react';
import TextField from './TextField';

storiesOf('TextField', module)
  .add('Standard', () => <TextField name="name" label="Label Text" />)
  .add('Required', () => <TextField name="name" label="Label Text" required />);
