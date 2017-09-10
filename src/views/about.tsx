import * as React from 'react';
import { render } from 'react-dom';

import App from '../components/aboutContent';

const rootEl = document.getElementById('app');

render(
  <App />,
  rootEl
);