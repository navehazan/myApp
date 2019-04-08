import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from "./src/Auth/Auth";
import dashboard from "./src/Dashboard/Dashboard";
import { createAppContainer,createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
const switchNavigator=createSwitchNavigator({
  auth:auth,
  dashboard:dashboard
})
const AppContainer=createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
