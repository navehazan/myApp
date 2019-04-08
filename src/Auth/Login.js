import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login screen</Text>
        <Button onPress={()=>this.props.navigation.navigate("signUp")} title="go to signup"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
