import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Clock from './components/clock';
import {Provider} from 'react-redux';
import store from './store';
import * as actions from './actions/action';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


