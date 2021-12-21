import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
// import FontAwesome, {parseIconFromClassName, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const HeaderLeft = (props) => {
  return (
    <View style={styles.headerLeft}>
      <View style={styles.logoContainer}>
        <Text>Bhadawal</Text>
      </View>
      <View >
        <Pressable style={styles.locationContainer} 
onPress={() => props.navigation.navigate("LocationScreen")}>
<EvilIcons name="location" size={14} color="black" />
        <Text>Rooms</Text>

        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeft: {},
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {},
});

export default HeaderLeft;
