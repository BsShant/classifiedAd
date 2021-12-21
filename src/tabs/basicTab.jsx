import { StatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "../components/bottomTab/tabBar";
import HomeScreen from "../screens/home/homeScreen";
import PopularScreen from "../screens/popular/popularScreen";
import PostAdScreen from "../screens/postAd/postAdScreen";
import AboutScreen from "../screens/about/aboutScreen";
import MyAdsScreen from "../screens/myAds/myAdsScreen";
import HeaderRight from "../components/headerBox/headerRight/headerRight";
import HeaderLeft from "../components/headerBox/headerLeft/headerLeft";
import InboxScreen from "../screens/inbox/inboxScreen";
const TabIndex = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
      <Tab.Navigator
      tabBar={(props)=> <MyTabBar {...props}/>}
      screenOptions={{
        tabBarShowLabel: false,
        // header: (newProps) => {
           headerTitle:(newProps)=><HeaderLeft {...props} {...newProps} />,
          headerRight: (newProps) => <HeaderRight {...props} {...newProps}/>
       
       }}
        
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
          }}
        />
        <Tab.Screen
          name="PopularScreen"
          component={PopularScreen}
          options={{
          }}
        />
        <Tab.Screen
          name="PostScreen"
          component={PostAdScreen}
          options={{
            headerShown:false
          }}
        />
        <Tab.Screen
          name="InboxScreen"
          component={InboxScreen}
          options={{
           }}
        />
        <Tab.Screen
          name="MyAdsScreen"
          component={MyAdsScreen}
          options={{
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};
export default TabIndex;
