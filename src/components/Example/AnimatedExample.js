import React,{PropTypes} from 'react';
import {
  Text,
  View,
  ListView,
  Animated,
} from 'react-native';

export default class AnimatedExample extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 100, padding: 20}}>
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}
