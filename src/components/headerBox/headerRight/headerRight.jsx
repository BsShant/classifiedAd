import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import FontAwesome, {parseIconFromClassName, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
// import { Avatar } from "react-native-elements";

const HeaderRight = (props) => {
  return (
    <View style={styles.headerRight}>
      <View style={styles.searchContainer}>
       
        <TouchableOpacity>
      <EvilIcons name="search" size={24} color="black"
onPress={() => props.navigation.navigate("SearchScreen")}
/>

        </TouchableOpacity>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text>U</Text>
        </View>
      {/* <Avatar  size="large"  rounded  title="MT"  onPress={() => console.log("Works!")}  activeOpacity={0.7} /> */}
        {/* <Avatar rounded title="MD" /> */}
      </View>
      {/* <View style={styles.locationContainer}>
          <Ionicons name="ios-home-outline" size={32} color="rebeccapurple" />
          <Text style={styles.categoryText}>Rooms</Text>

          </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  avatarContainer: {
    display:'flex',
    justifyContent:'center'
  },
  avatar:{
    height:30,
    width:30,
    borderRadius:15,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  },
  logoContainer: {},
  searchContainer:{
    flexDirection:'row'
  }
});

export default HeaderRight;
