import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

const CustomTab = (props) => {
  return (
    <TouchableOpacity
      style={{
        // position:'absolute',
        top: -20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "rebeccapurple",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={props.onPress}
    >
      {/* <View
        style={{
         
        }}
      > */}
        {props.children}
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default CustomTab;
