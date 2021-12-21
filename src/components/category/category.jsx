import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";

const Category = ({item}) => {
  return (
   
        <Pressable style={styles.categoriesBox}>
            <View style={styles.categoryIcon}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: item.icon,
                }}
              />
            </View>
            <Text style={styles.categoryText}>{item.name.toUpperCase()}</Text>
        </Pressable>

  );
};

export default Category;
