import React,{PropTypes} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

export default class ImageExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true}
  }

  render() {
    var icon = this.state.active ? require('./hawk.png') : require('./bunny.png');
    return (
      <ScrollView>
        <Image source={require('./bunny.png')}/>
        <Image source={icon} />
        <Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />
      </ScrollView>
    );
  }
}
