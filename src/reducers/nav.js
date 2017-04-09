import * as types from '../actions/actionTypes';
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import TabsNav from '../navigators/TabsNav';
const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'InitRoot',
      routeName: 'Root',
      index: 0,
      routes: [
        {
          key: 'InitHome',
          routeName:'Home',
          routes: [
            {key: 'InitSubHome', routeName: 'SubHome'},
          ],
          index: 0,
        },
        {
          key: 'InitPeople',
          routeName:'People',
        },
        {
          key: 'InitChat',
          routeName:'Chat',
        },
        {
          key: 'InitSettings',
          routeName:'Settings',
        },
      ],
    }
  ]
};

export function nav(state = initialNavState, action) {
  switch (action.type) {
    case types.NAV_LOGIN_SUCCESS:
      return TabsNav.router.getStateForAction(NavigationActions.back(), state);
    default:
      return TabsNav.router.getStateForAction(action, state);
  }
}
