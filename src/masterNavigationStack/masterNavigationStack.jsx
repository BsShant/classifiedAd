import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabIndex from '../tabs/basicTab';
import SearchScreen from '../screens/search/searchScreen';
import AdsInfo from '../screens/adsInfo/adsInfoScreen';
import SubCategoryScreen from '../screens/postAd/subCategory';
import AdImageUpload from '../screens/postAd/imageUpload';
import AdDescription from '../screens/postAd/adDescription';
import HeaderLeft from '../components/headerBox/headerLeft/headerLeft';
import HeaderRight from '../components/headerBox/headerRight/headerRight';
import ChatScreen from '../screens/inbox/chatScreen';
import PhoneScreen from '../screens/postAd/phoneScreen';
import FinishScreen from '../screens/postAd/finishScreen';
import LocationScreen from '../screens/location/locationScreen';
const MasterStackNavigator =(props)=> {
  const MasterStack = createNativeStackNavigator();
  return (
    <NavigationContainer>

    <MasterStack.Navigator
     screenOptions={{
      headerShown:false    
    }}
   
    >
      <MasterStack.Screen name='TabIndex' component={TabIndex}  
       options={{
        headerTitle:(newProps)=><HeaderLeft {...props} {...newProps} />,
        headerRight: (newProps) => <HeaderRight {...props} {...newProps}/>
      }}
      />
      <MasterStack.Screen name='SearchScreen' component={SearchScreen} />
      <MasterStack.Screen name='LocationScreen' component={LocationScreen} />

      <MasterStack.Screen name='AdsInfoScreen' component={AdsInfo} />
      <MasterStack.Screen name='SubCategoryScreen' component={SubCategoryScreen} 
       options={{
        headerShown:true ,
        title: null  
   
      }}/>
      <MasterStack.Screen name='AdImageUploadScreen' component={AdImageUpload} 
      options={{
        headerShown:true ,
        title: null  
  
      }}
      />
      <MasterStack.Screen name='PhoneScreen' component={PhoneScreen} 
       options={{
        headerShown:true ,
        title: null  
   
      }}/>
      <MasterStack.Screen name='FinishScreen' component={FinishScreen} 
      options={{
        headerShown:true,
        title: null  
      }}
      />

      <MasterStack.Screen name='AdDescriptionScreen' component={AdDescription} 
       options={{
        headerShown:true,
        title: null  
  
      }}/>
      <MasterStack.Screen name='ChatScreen' component={ChatScreen} />



    </MasterStack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MasterStackNavigator;
