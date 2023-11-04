import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 0, flex: 1 }}>
      {/* Panggil Screen Komponen Di Sini */}
      {/* <PressableScreen/>  */}
      {/* <StackHookScreen/>
      <StackScreen/>
      <TouchableScreen/> */}
      <StackParamScreen/>

      <Text style={[styles.text]}>elma saskiaa (1203210056)</Text>
  

    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  }
});
export default App;
