import React,{PropTypes} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeDetail extends React.Component {

  static defaultProps = {
  };

  static propTypes = {
  };

  render() {
    return (
      <View style={{flex:1,flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between' }}>
          <View style={{width:100, height:40 }}/>
          <View style={{ backgroundColor:'yellow', width:100, height:40 }}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between' }}>
          <View style={{width:100, height:40 }}/>
          <View style={{ backgroundColor:'yellow', width:100, height:40 }}/>
        </View>
        <View style={{ backgroundColor:'green', width:100, height:40 }}/>
        <View style={{ backgroundColor:'yellow', width:100, height:40 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
