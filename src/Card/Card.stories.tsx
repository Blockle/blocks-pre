// import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  // .addDecorator(withKnobs)
  .add('Standard', () => {
    // const options = [1, 2, 3];
    // const value = select<keyof typeof options>('Shadow', options, 1);

    return <Card>Click me</Card>;
  });
