import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import bottomTabStyle from "./styles";

const InboxTab = (props) => {
  return (
    <View
      style={{
        ...bottomTabStyle.commonContainer,
      }}
    >
      {props.isFocused ? (
        <Ionicons name="chatbubble-sharp" size={24} color="black" />
      ) : (
        <Ionicons name="chatbubble-outline" size={24} color="black" />
      )}
      <Text>Inbox</Text>
    </View>
  );
};

export default InboxTab;
