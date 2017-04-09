import React,{PropTypes} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class LoginScreen extends React.Component {

  static defaultProps = {
    login:()=>{},
    setInputText:()=>{},
    isFetching: false,
    phone: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func,
    isFetching: PropTypes.bool,
    setInputText: PropTypes.func,
    phone: PropTypes.string,
    password: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.setPhone = this.setPhone.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setPhone(phone) {
    this.props.setInputText({
      phone: phone
    });
  }

  setPassword(password) {
    this.props.setInputText({
      password: password
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{ fontSize:30,marginBottom:20 }}>登录</Text>
          <View style={{flexDirection:'row', height: 50}} >
            <Text style={{flex: 1, marginLeft:40, height: 50, paddingTop:20, textAlign:'center'}} >手机号码:</Text>
            <TextInput
              onChangeText={this.setPhone}
              style={{flex: 3, height: 50, marginRight:15}}
              placeholder="请输入手机号"
              numberOfLines={1}
              value={this.props.phone}
              keyboardType = 'numeric'
              maxLength = {11}
              clearButtonMode = 'while-editing'
            />
          </View>
          <View style={{flexDirection:'row', height: 50}} >
            <Text style={{flex: 1, marginLeft:40, height: 50, paddingTop:20, textAlign:'center'}} >密码:</Text>
            <TextInput
              onChangeText={this.setPassword}
              style={{flex: 3, height: 50, marginRight:15}}
              placeholder="请输入密码"
              numberOfLines={1}
              value={this.props.password}
              secureTextEntry={true}
              clearButtonMode = 'while-editing'
            />
          </View>
          <View style={{width: 50, height: 50}} />
          <Button title={this.props.isFetching ? '登录中...':'登录'} onPress={this.props.login} style={{width: 50, height: 50}} />
        </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  }
});
