import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "react-native-vector-icons";
const BottomDescriptionBox = () => {
  return (
<View style={styles.bottomDescriptionBox}>
            <Text>Description</Text>
            <Text>This ia a great room based on the previous reviews and 
                the new reviews so take it please.</Text>
        </View>
  );
};

export default BottomDescriptionBox;
