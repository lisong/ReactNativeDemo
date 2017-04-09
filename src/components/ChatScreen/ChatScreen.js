import React,{PropTypes} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default class ChatScreen extends React.Component {

  static defaultProps = {
  };

  static propTypes = {
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>ChatScreen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
