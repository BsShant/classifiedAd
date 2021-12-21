import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import bottomTabStyle from "./styles";

const PostTab = (props) => {
  return (
    <View
      style={{
        ...bottomTabStyle.commonContainer,
        // left:10,
        // top:-30
      }}
    >
      <AntDesign name="pluscircleo" size={34} color="black"/>
    </View>
  );
};

export default PostTab;
