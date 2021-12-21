<script src="http://localhost:8097"></script>;
import React from "react";
import { View, TouchableOpacity, Image, Text, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import data from "./adFile";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";

const AdBox = (props) => {
  return (
    <FlatList
      // itemDimension={160}
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      // style={{ flex: 1 }}
      horizontal={false}
      contentContainerStyle={{ padding: 20 }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    
      renderItem={({ item, index }) => {
        return (
          <Pressable
            style={styles.adBox}
            onPress={() => props.navigation.navigate("AdsInfoScreen")}
          >
        
              <View style={styles.roomImageContainer}>
                <Image source={{ uri: item.image }} style={styles.roomImage} />
              </View>
              <View style={styles.roomDescriptionContainer}>
                <View style={styles.adProfileContainer}>
                  <Image
                    source={require("../../assets/images/bdwlRoomImage.jpg")}
                    style={styles.adProfileImage}
                  />
                </View>
                <View style={styles.adDetailContainer}>
                  <Text style={styles.adPrice} numberOfLines={1}>
                    Rs. {item.price}
                  </Text>
                  <Text style={styles.adRoomTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <View>
                    <Text style={styles.roomAddress} numberOfLines={1}>
                      <Ionicons name="location" size={12} color="black" />
                      {item.address}
                    </Text>
                  </View>
                </View>
              </View>
          </Pressable>
        );
      }}
    />
  );
};

export default AdBox;
