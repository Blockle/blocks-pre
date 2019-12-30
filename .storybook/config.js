import { configure } from '@storybook/react';
import './theme.css';
import './storybook.css';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const components = require.context('../src/', true, /\.stories\.tsx$/);

configure(() => {
  components.keys().forEach(components);
}, module);
