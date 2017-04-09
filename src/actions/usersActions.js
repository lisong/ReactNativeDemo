import * as types from './actionTypes';
import _ from 'lodash';


export function logout() {
  return {type: types.USER_LOGOUT};
}

export function loginInputs(params = {phone: '', password: ''}) {
  return {
    type: types.USER_LOGIN_INPUTS,
    payload: {...params}
  };
}

function requestLogin() {
  return {
    type: types.REQUEST_USER_LOGIN,
  };
}
function receiveLogin(authData) {
  return {
    type: types.RECEIVE_USER_LOGIN,
    payload: authData
  };
}

export function login(phone, password) {
  return (dispatch) => {
    dispatch(requestLogin());
    return new Promise(function(resolve, reject) {
      //模拟向请求服务器登录
      setTimeout(function(){
        resolve({isSuccess:true});
      }, 1000)
    })
    .then(data => {
      dispatch(receiveLogin(data));
      //登录成功后隐藏登录界面
      dispatch({type:types.NAV_LOGIN_SUCCESS});
    });
  };
}
