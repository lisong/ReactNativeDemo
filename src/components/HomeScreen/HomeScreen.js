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
    goHomeDetail: ()=>{},
    goPeople: ()=>{},
    goChat: ()=>{},
    goSettings: ()=>{},
    goBack: ()=>{},
    goExample: (exampleName)=>{},
  };

  static propTypes = {
    goHomeDetail: PropTypes.func,
    goPeople: PropTypes.func,
    goChat: PropTypes.func,
    goSettings: PropTypes.func,
    goBack: PropTypes.func,
    goExample: PropTypes.func,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this.props.goHomeDetail}
          title="Go to home detail stack"
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
          onPress={()=>{this.props.goExample('ViewExample')}}
          title="Go View Example"
        />
        <Button
          onPress={()=>{this.props.goExample('TextExample')}}
          title="Go Text Example"
        />
        <Button
          onPress={()=>{this.props.goExample('TextInputExample')}}
          title="Go TextInput Example"
        />
        <Button
          onPress={()=>{this.props.goExample('ImageExample')}}
          title="Go Image Example"
        />
        <Button
          onPress={()=>{this.props.goExample('ListViewExample')}}
          title="Go ListView Example"
        />
        <Button
          onPress={()=>{this.props.goExample('AnimatedExample')}}
          title="Go Animated Example"
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
