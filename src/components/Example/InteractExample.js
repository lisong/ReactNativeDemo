import React,{PropTypes} from 'react';
import {
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

export default class InteractExample extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }
  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <ScrollView style={{paddingTop: 64}}>
        <TextInput
          style={{height:40, width:400, backgroundColor:'green'}}
          ref={(input) => { this.textInput = input; }} />
        <Button onPress={this.focus} title="onPress" />
      </ScrollView>
    );
  }
}
