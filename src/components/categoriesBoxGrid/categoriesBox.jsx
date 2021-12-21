import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";
import Category from "../category/category";

const CategoriesBox = () => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={styles.categoriesBox}
          onPress={() => alert("hi i am category box")}
        >
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
      )}
    />
  );
};

export default CategoriesBox;
