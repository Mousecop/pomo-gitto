import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Clock from './components/clock';
import {Provider} from 'react-redux';
import store from './store';
import * as actions from './actions/action';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Login from './components/login';
import IssueList from './components/issue-list';
const routes = (

        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Login} />
                <Route path='/issues' component={IssueList} />
            </Route>
        </Router>

)

ReactDOM.render(
  <Provider store={store}>
      {routes}
  </Provider>,
  document.getElementById('root')
);
