/*
State 
1) List Reducer
    -if issue is selected
    -the list itself
    -if whole list is disable, beside the one selected
2) Clock Reducer
    -when time ends. true or false
    -check if started, or ended.
*/
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import thunk from 'redux-thunk';

export default createStore(reducers, applyMiddleware(thunk));
