import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AdBox from "../../components/adBoxGrid/adBox";
import CategoriesBox from "../../components/categoriesBoxGrid/categoriesBox";
import styles from "./styles";

const PopularScreen = (props) => {
  return (
      <View style={styles.container}>
        <View style={styles.categoriesContainer}>
          {/* <View style={styles.categoriesHeader}> */}
            {/* <Text>Recomended ads</Text> */}
            {/* <Text>View all</Text> */}
          {/* </View> */}
          <CategoriesBox navigation={props.navigation}/>
        </View>
        <View style={styles.recomendedContainer}>
          {/* <Text>Recomended ads</Text> */}
          <AdBox navigation={props.navigation}/>
        </View>
       
        <StatusBar style="auto" />
      </View>
  );
};



export default PopularScreen;
