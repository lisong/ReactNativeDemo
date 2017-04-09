import React, { PropTypes } from 'react';
import {Text, View, Button} from 'react-native';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeScreen from '../components/HomeScreen';
import * as usersActions from '../actions/usersActions';
import {
  NavigationActions
} from 'react-navigation';
import _ from 'lodash';

class HomeContainer extends React.Component {
  render() {
    const { forgot, actions, navigation } = this.props;
    return (
      <HomeScreen
        goHome={()=>{navigation.dispatch({type:'NAV_TAB_HOME'})}}
        goHomeDetail={()=>{
          const navigateAction = NavigationActions.navigate({
            routeName: 'HomeDetail',
            params: {},
          })
          navigation.dispatch(navigateAction)
        }}
        goPeople={()=>{
          const navigateAction = NavigationActions.navigate({
            routeName: 'People',
            params: {},
          })
          navigation.dispatch(navigateAction)
        }}
        goChat={()=>{
          const navigateAction = NavigationActions.navigate({
            routeName: 'Chat',
            params: {},
          })
          navigation.dispatch(navigateAction)
        }}
        goSettings={()=>{
          const navigateAction = NavigationActions.navigate({
            routeName: 'Settings',
            params: {},
          })
          navigation.dispatch(navigateAction)
        }}
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
)(HomeContainer)
