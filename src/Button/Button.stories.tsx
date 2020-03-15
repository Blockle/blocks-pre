import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('Standard', () => <Button>Click me</Button>)
  .add('Standard', () => <Button>Click me</Button>)
  .add('Standard Secondary', () => <Button secondary>Click me</Button>)
  .add('Standard Disabled', () => <Button disabled>Click me</Button>);
