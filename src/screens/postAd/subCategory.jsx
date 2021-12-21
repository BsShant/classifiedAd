import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";

const SubCategoryScreen = ({route:{params:{subCategories}},...props}) => {
  return (
    <FlatList
    data={subCategories}
    style={{ flex: 1, padding:10 }}
    contentContainerStyle={{ paddingVertical: 20 }}
    columnWrapperStyle={{ justifyContent: "center", marginTop:20 }}
    keyExtractor={(item,index) => index}
    numColumns={2}
    horizontal={false}
    ListHeaderComponent={<View style={{justifyContent:'center', alignItems:'center', marginTop:40}}><Text>Select the sub-category of your selected category</Text></View>}
      renderItem={({item,index}) => (
        <TouchableOpacity style={styles.subCategoriesBox} 
        onPress={()=>props.navigation.navigate('AdImageUploadScreen')}
        >
            
            <Text>{item}</Text>
        </TouchableOpacity>
  
      )}
    />
   
  )     
};

export default SubCategoryScreen;
