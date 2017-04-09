import React,{PropTypes} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default class SettingsScreen extends React.Component {

  static defaultProps = {
    goLogin:()=>{},
    logout:()=>{},
    isLogin:false,
  };

  static propTypes = {
    goLogin: PropTypes.func,
    logout: PropTypes.func,
    isLogin: PropTypes.bool,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.props.isLogin ?
          <Button
            onPress={this.props.logout}
            title="安全退出"
          />
          :
          <Button
            onPress={this.props.goLogin}
            title="去登录"
          />
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
