import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Callout, Circle } from "react-native-maps";
const Places = () => {
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    // <View style={{height:'100%'}}>

      <GooglePlacesAutocomplete
     placeholder='Search'
     onPress={(data, details = null) => {
       // 'details' is provided when fetchDetails = true
       console.log(data, details);
     }}
     query={{
       key: 'AIzaSyA04TFOlwGcadW-Wv56UdsgZsBY9-N0woI',

       language: 'en',
     }}
     styles={{
       container: {flex:0, position:'absolute', width:'100%', zIndex:1},
       listView:{backgroundColor:'white'}
     }}
   />
    // </View>
     
  );
};
export default Places;
