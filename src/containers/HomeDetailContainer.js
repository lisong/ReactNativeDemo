import React, { PropTypes } from 'react';
import {Text, View, Button} from 'react-native';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeDetail from '../components/HomeDetail';
import * as usersActions from '../actions/usersActions';
import _ from 'lodash';

class HomeDetailContainer extends React.Component {
  render() {
    const { forgot, actions, navigation } = this.props;
    return (
      <HomeDetail/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {forgot: _.get(state, 'forgot')};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(Object.assign({}, usersActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDetailContainer)
