import * as types from '../actions/actionTypes';
import _ from 'lodash';

export function users(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function login(state = {}, action) {
  switch (action.type) {
    case types.USER_LOGIN_INPUTS:
      return Object.assign({}, state, {...action.payload});

    case types.REQUEST_USER_LOGIN:
      return Object.assign({}, state, {isFetching:true, isLogin:false})

    case types.RECEIVE_USER_LOGIN:
      return Object.assign({}, state, {isFetching:false, isLogin: true, password: ''})

    case types.USER_LOGOUT:
      return Object.assign({}, state, {isLogin: false})
    default:
      return state
  }
}
