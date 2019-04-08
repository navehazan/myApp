import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createDrawerNavigator } from "react-navigation";
import MyMap from "./Map";
import Settings from "./Settings";
 class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard screen</Text>
        <Button onPress={()=>this.props.navigation.navigate("auth")} title="go to auth"/>
      </View>
    );
  }
}
export default createDrawerNavigator({
  map:MyMap,
  settings:Settings
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
