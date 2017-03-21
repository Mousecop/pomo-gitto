import { combineReducers } from 'redux'
import Clock from './clock-reducer';
import List from './list-reducer';


export default combineReducers({
  Clock,
  List
});