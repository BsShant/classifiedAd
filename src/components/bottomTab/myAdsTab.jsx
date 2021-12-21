import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import bottomTabStyle from "./styles";

const MyAdsTab = (props) => {
  return (
    <View
      style={{
        ...bottomTabStyle.commonContainer,
      }}
    >
      {props.isFocused ? (
        <AntDesign name="heart" size={24} color="black" />
      ) : (
        <AntDesign name="hearto" size={24} color="black" />
      )}
      <Text>My Ads</Text>
    </View>
  );
};

export default MyAdsTab;
