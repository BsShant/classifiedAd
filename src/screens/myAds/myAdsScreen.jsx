import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button,useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AdBox from "../../components/adBoxGrid/adBox";
import CategoriesBox from "../../components/categoriesBoxGrid/categoriesBox";
import styles from "./styles";
import { TabView, SceneMap } from 'react-native-tab-view';



const MyAdsScreen = (props) => {
    const FirstRoute = () => (
      // <View
      // style={{padding:10}}
      // >
        <AdBox navigation={props.navigation}/>
      // </View>
    )  
      const SecondRoute = () => (
        // <View
        // style={{padding:10}}
        // >
        <AdBox navigation={props.navigation}/>
      // </View>       
       );
      
      const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      });
        const layout = useWindowDimensions();
      
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
          { key: 'first', title: 'First' },
          { key: 'second', title: 'Second' },
        ])
  return (
    // <ScrollView>
       <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    // </ScrollView>
  );
};



export default MyAdsScreen;
