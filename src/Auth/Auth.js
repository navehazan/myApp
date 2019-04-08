import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import Login from "./Login";
import Signup from "./Signup";

export default createStackNavigator({
  login: Login,
  signUp: Signup
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
