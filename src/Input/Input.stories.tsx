import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './Input';

storiesOf('Input', module)
  .add('Standard', () => <Input name="name" label="Label Text" />)
  .add('Required', () => <Input name="name" label="Label Text" required />);
