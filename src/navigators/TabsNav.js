import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeContainer from '../containers/HomeContainer';
import PeopleContainer from '../containers/PeopleContainer';
import ChatContainer from '../containers/ChatContainer';
import SettingsContainer from '../containers/SettingsContainer';
import HomeDetailContainer from '../containers/HomeDetailContainer';

const MyHomeScreen = StackNavigator({
  SubHome: {
    screen: HomeContainer,
    navigationOptions: {
      title: () => 'Home',
    },
  },
  HomeDetail: {
    screen: HomeDetailContainer,
    navigationOptions: {
      title: ({ state }) => `Home Detail`,
    },
  },
  ViewExample: {
    getScreen: () => require('../components/Example/ViewExample').default,
    navigationOptions: {
      title: () => 'View Example',
    },
  },
  TextExample: {
    getScreen: () => require('../components/Example/TextExample').default,
    navigationOptions: {
      title: () => 'Text Example',
    },
  },
  TextInputExample: {
    getScreen: () => require('../components/Example/TextInputExample').default,
    navigationOptions: {
      title: () => 'Text Example',
    },
  },
  ImageExample: {
    getScreen: () => require('../components/Example/ImageExample').default,
    navigationOptions: {
      title: () => 'Image Example',
    },
  },
  ListViewExample: {
    getScreen: () => require('../components/Example/ListViewExample').default,
    navigationOptions: {
      title: () => 'ListView Example',
    },
  },
  AnimatedExample: {
    getScreen: () => require('../components/Example/AnimatedExample').default,
    navigationOptions: {
      title: () => 'Animated Example',
    },
  },
});

const MyPeopleScreen = ({ navigation }) => (
  <PeopleContainer
    navigation={navigation}
  />
);

const MyChatScreen = ({ navigation }) => (
  <ChatContainer
    navigation={navigation}
  />
);

const MySettingsScreen = ({ navigation }) => (
  <SettingsContainer
    navigation={navigation}
  />
);

const TabsNav = TabNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '',
    navigationOptions: {
      tabBar: {
        label: 'Home',
        icon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }
    }
  },
  People: {
    screen: MyPeopleScreen,
    path: 'cart',
    navigationOptions: {
      tabBar: {
        label: 'People',
        icon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-people' : 'ios-people-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    }
  },
  Chat: {
    screen: MyChatScreen,
    path: 'chat',
    navigationOptions: {
      tabBar: {
        label: 'Chat',
        icon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    }
  },
  Settings: {
    screen: MySettingsScreen,
    path: 'settings',
    navigationOptions: {
      tabBar: {
        label: 'Settings',
        icon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
});

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabsNav,
  },
  Login: {
    getScreen: ()=> require('../containers/LoginContainer').default,
  }
}, {
  headerMode: 'none',
});

export default StacksOverTabs;
