import React,{PropTypes} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default class PeopleScreen extends React.Component {

  static defaultProps = {
    goBack: ()=>{},
  };

  static propTypes = {
    goBack: PropTypes.func,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this.props.goBack}
          title="Go back"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
