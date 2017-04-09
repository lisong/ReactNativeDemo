import React, { PropTypes } from 'react';
import {Text, View, Button} from 'react-native';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {NavigationActions} from 'react-navigation';
import _ from 'lodash';
import PeopleScreen from '../components/PeopleScreen';
import * as usersActions from '../actions/usersActions';

class PeopleContainer extends React.Component {
  render() {
    const { forgot, actions, navigation } = this.props;
    return (
      <PeopleScreen
        goBack={()=>{navigation.dispatch(NavigationActions.back())}}
      />
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
)(PeopleContainer)
