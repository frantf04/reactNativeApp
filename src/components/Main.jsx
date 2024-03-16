import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import TropaList from "./TropaList";

function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <TropaList />
    </View>
  );
}

export default Main;
