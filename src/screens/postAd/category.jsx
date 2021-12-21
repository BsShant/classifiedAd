import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";

const Category = ({item, ...props}) => {
 
  return (
   
        <Pressable style={styles.categoriesBox} onPress={()=>props.navigation.navigate('SubCategoryScreen', {subCategories:item.subCategories})}>
            <View style={styles.categoryIcon}>
              <Image
                style={styles.tinyLogo}
                source={item.icon}
              />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
        </Pressable>

  );
};

export default Category;
