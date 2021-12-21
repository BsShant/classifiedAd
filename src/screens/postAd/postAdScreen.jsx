import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";
import Category from "./category";

const PostAdScreen = (props) => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    numColumns={2}
    style={{ flex: 1, padding:10 }}
    horizontal={false}
    contentContainerStyle={{ paddingVertical: 20, marginTop:40 }}
    columnWrapperStyle={{ justifyContent: "center", marginTop:20 }}
      renderItem={({ item }) => (
        <Category item={item} {...props}/>
      )}
    />
  );
};

export default PostAdScreen;
