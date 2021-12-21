import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "react-native-vector-icons";
const TopDescriptionBox = () => {
  return (
        <View style={styles.topDescriptionBox}>
          <View>
            <Text>Rs 45000/month</Text>
            <Text>Single Roome Available in cheap</Text>
            <Text>
              <Ionicons name="location" size={12} color="black" />
              sinamagal, Kathmandu
            </Text>
          </View>
          <View>
            <Text>
              10
              <Ionicons name="eye-sharp" size={24} color="black" />
            </Text>
          </View>
          <View>
            <Text>
              10
              <Ionicons name="heart-sharp" size={24} color="black" />
            </Text>
          </View>
        </View>
  );
};

export default TopDescriptionBox;
