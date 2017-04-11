import React,{PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class TextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }

  render() {
    return (
      //Text supports nesting, styling, and touch handling
      <View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text numberOfLines={5}>
            {this.state.bodyText}
          </Text>
        </Text>
        <Text>
          There is a blue square
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          in between my text.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
