import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button,useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AdBox from "../../components/adBoxGrid/adBox";
import CategoriesBox from "../../components/categoriesBoxGrid/categoriesBox";
import styles from "./styles";
import { TabView, SceneMap } from 'react-native-tab-view';
import Notification from "./notification";
import Chat from "./chat";



const InboxScreen = (props) => {
    const FirstRoute = () => (
      <View
      >
        <Chat navigation={props.navigation}/>
       </View>
    )  
      const SecondRoute = () => (
        <View
        >
        <Notification navigation={props.navigation}/>
       </View>       
       );
      
      const renderScene = SceneMap({
        chat: FirstRoute,
        notification: SecondRoute,
      });
        const layout = useWindowDimensions();
      
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
          { key: 'chat', title: 'Chat' },
          { key: 'notification', title: 'Notification' },
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



export default InboxScreen;
