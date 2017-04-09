import React, { PropTypes } from 'react';
import {Text, View, Button} from 'react-native';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {NavigationActions} from 'react-navigation';
import Login from '../components/Login';
import * as usersActions from '../actions/usersActions';
import _ from 'lodash';

class LoginContainer extends React.Component {
  render() {
    const { login, actions, navigation } = this.props;
    let phone = _.get(login,'phone');
    let password = _.get(login,'password');
    return (
      <Login
        login={()=>{actions.login(phone, password)}}
        setInputText={actions.loginInputs}
        phone={phone}
        password={password}
        isFetching={_.get(login, 'isFetching')}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {login: _.get(state, 'login')};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(Object.assign({}, usersActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
