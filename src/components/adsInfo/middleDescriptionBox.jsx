import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "react-native-vector-icons";
const MiddleDescriptionBox = () => {
  return (
    <View style={styles.middleDescriptionBox}>
    <Text>Details</Text>
  <View style={styles.middleSubBox}>
  <View>
      <Text>Service Charge</Text>
      <Text>Contact</Text>
      <Text>Floor</Text>
      <Text>Facilities</Text>

  </View>
  <View>
  <Text>Rs 500</Text>
      <Text>9848488838</Text>
      <Text>Secons</Text>
      <Text>Parking, Wifi, @4hrs water</Text>
  </View>
  </View>
 
</View>
  );
};

export default MiddleDescriptionBox;
