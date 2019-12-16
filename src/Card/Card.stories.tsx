import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from './Card';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('Standard', () => {
    const options = {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
    };

    const value = select<keyof typeof options>('Shadow', options, '0');

    return <Card shadow={value}>Click me</Card>;
  });
