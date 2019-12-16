import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('Standard', () => <Button>Click me</Button>)
  .add('Standard Inline', () => <Button inline>Click me</Button>)
  .add('Standard Secondary', () => (
    <Button inline secondary>
      Click me
    </Button>
  ))
  .add('Standard Disabled', () => (
    <Button inline disabled>
      Click me
    </Button>
  ))
  .add('Flat', () => (
    <Button inline flat>
      Click me
    </Button>
  ))
  .add('Flat secondary', () => (
    <Button inline flat secondary>
      Click me
    </Button>
  ))
  .add('Flat Disabled', () => (
    <Button inline flat disabled>
      Click me
    </Button>
  ));
