import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Routes />,
  document.getElementById('root'),
);
