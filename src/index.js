import React, { Component } from "react";
import { View, Text } from "react-native";
import TimerIndex from "./TimerCutDown";

class AppIndex extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <TimerIndex />
      </View>
    );
  }
}
export default AppIndex;
