import { combineReducers } from 'redux'
import _ from 'lodash';
import * as types from '../actions/actionTypes';
import {users, login} from './users';
import {nav} from './nav';
const appReducer = combineReducers({
  users,
  login,
  nav,
});

const rootReducer = (state, action) => {
  if (action.type === types.USER_LOGOUT) {
    let data = Object.assign({}, state);
    _.set(data, 'users', {});
    return appReducer(data, action)
  }
  return appReducer(state, action)
}

export default rootReducer
