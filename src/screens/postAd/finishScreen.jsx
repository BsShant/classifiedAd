import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Button, Avatar, Switch } from "react-native-paper";
const subCategories = [
  "One Acre",
  "Two Acre",
  "Three Acre",
  "More Than Three Acre",
];
const FinishScreen = (props) => {


  return (
      <View style={{height:"100%"}}>
        <View style={styles.upperContainer}>
          <View style={{ backgroundColor: "rebeccapurple",
    height: "90%", justifyContent:'center', alignItems:'center'}}>
      <Text>

            <Ionicons name="ios-shield-checkmark-sharp" size={100} color="white" />
      </Text>
          <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>Congratulations</Text>
          <Text style={{fontSize:20, color:'white'}}>Your post is live now</Text>
          </View>
         
        </View>
        <View style={{height:'50%', justifyContent:'flex-end', padding:20}}>

          <Button
            icon="camera"
            mode="contained"
            style={{marginBottom:20}}
            onPress={() => props.navigation.navigate("PostScreen")}
          >
            Preview Post
          </Button>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => props.navigation.navigate("AdsInfoScreen")}
          >
            Home
          </Button>
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
   
    borderRadius:0,
    height:'50%'
    // marginLeft:20
  },
});
// 
export default FinishScreen;
