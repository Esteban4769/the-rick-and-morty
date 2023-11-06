import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './utils/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
