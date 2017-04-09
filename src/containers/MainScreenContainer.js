import React, { PropTypes } from 'react';
import {Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator} from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import TabsNav from '../navigators/TabsNav';

const AppWithNavigationState = ({ dispatch, nav }) => (
  <TabsNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
