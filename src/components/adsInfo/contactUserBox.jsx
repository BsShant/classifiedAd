import React from "react";
import { View, Image, Text, Button } from "react-native";
import styles from "./styles";
import { Ionicons } from "react-native-vector-icons";
const ContactUserBox = () => {
  return (
    <View style={styles.contactUserBox}>
      <View style={styles.userAvatarBox}>
        <Image
          style={styles.userAvatarImage}
          source={require("../../assets/images/bdwlRoomImage.jpg")}
        />
        <View style={styles.userDetailBox}>
          <Text>Sanjay Dahal</Text>
          <Text>
            <Ionicons name="star-outline" size={24} color="black" />
            <Ionicons name="star-outline" size={24} color="black" />
            <Ionicons name="star-outline" size={24} color="black" />
            <Ionicons name="star-outline" size={24} color="black" />
            <Ionicons name="star-outline" size={24} color="black" />
          </Text>
        </View>
      </View>

      <View style={styles.contactButton}>
        <Button title="Contact" />
      </View>
    </View>
  );
};

export default ContactUserBox;
