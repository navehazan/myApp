import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Signup screen</Text>
        <Button onPress={()=>this.props.navigation.navigate("login")} title="go to login"/>
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
