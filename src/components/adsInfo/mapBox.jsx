import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Callout, Circle } from "react-native-maps";
const MapBox = () => {
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <View style={styles.mapBox}>
       <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      onFail={error => console.log('error' + error)}
      query={{
        key: 'AIzaSyA04TFOlwGcadW-Wv56UdsgZsBY9-N0woI',
        language: 'en',
      }}
      styles={{
        container: {fex:0,position:'absolute',top:10, height:300, width:'100%', zIndex:2000},
        listView:{backgroundColor:'white', height:400, color:'black', zIndex:2000}
      }}
    />
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={pin}
          pinColor="blue"
          draggable={true}
          onDragStart={(e) => {
            // console.log("drag Start", e);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>hi</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={500} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  mapBox: {
    width: "100%",
    height: 500,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
export default MapBox;
