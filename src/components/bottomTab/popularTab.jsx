import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import bottomTabStyle from "./styles";

const PopularTab = (props) => {
  return (
    <View
      style={{
        ...bottomTabStyle.commonContainer,
      }}
    >
      {props.isFocused ? (
        <Ionicons name="flame" size={24} color="black" />
      ) : (
        <Ionicons name="flame-outline" size={24} color="black" />
      )}
      <Text>Popular</Text>
    </View>
  );
};

export default PopularTab;
