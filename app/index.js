
import React from 'react';
import { render } from 'react-dom';

import store from './store';

import App from 'App/Container';

render(
  <App store = { store } />,
  document.getElementById('app')
);
