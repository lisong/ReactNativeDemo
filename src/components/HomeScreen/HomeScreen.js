import React,{PropTypes} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default class HomeScreen extends React.Component {

  static defaultProps = {
    goHome: ()=>{},
    goHomeDetail: ()=>{},
    goPeople: ()=>{},
    goChat: ()=>{},
    goSettings: ()=>{},
    goBack: ()=>{},
  };

  static propTypes = {
    goHome: PropTypes.func,
    goHomeDetail: PropTypes.func,
    goPeople: PropTypes.func,
    goChat: PropTypes.func,
    goSettings: PropTypes.func,
    goBack: PropTypes.func,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this.props.goHomeDetail}
          title="Go to home detail stack"
        />
        <Button
          onPress={this.props.goHome}
          title="Go to home tab"
        />
        <Button
          onPress={this.props.goPeople}
          title="Go to People tab"
        />
        <Button
          onPress={this.props.goChat}
          title="Go to Chat tab"
        />
        <Button
          onPress={this.props.goSettings}
          title="Go to Settings tab"
        />
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
