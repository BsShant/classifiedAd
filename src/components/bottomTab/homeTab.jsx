import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import bottomTabStyle from "./styles";

const HomeTab = (props) => {
  return (
    <View
      style={{
        ...bottomTabStyle.commonContainer,
      }}
    >
      {
        props.isFocused?
        <Ionicons name="home" size={24} color="black" />:
        <Ionicons name="home-outline" size={24} color="black" />

      }
      <Text>Home</Text>
    </View>
  );
};

export default HomeTab;
