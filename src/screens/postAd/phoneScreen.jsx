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
import { Ionicons } from "react-native-vector-icons";

import { TextInput, Button, Avatar, Switch } from "react-native-paper";
const subCategories = [
  "One Acre",
  "Two Acre",
  "Three Acre",
  "More Than Three Acre",
];
const PhoneScreen = (props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescrription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>

      <View style={styles.userContainer}>
        <Avatar.Icon size={40} icon="human" />
        <View style={{marginLeft:20}}>
          <Text style={{fontSize:17, fontWeight:'bold'}}>Bishant Pokharel</Text>
          <View style={{flexDirection:'row', marginTop:2}}>
            <Text style={styles.stars}>
            <Ionicons name="star-outline" size={20}  color="black" />

            </Text>
            <Text style={styles.stars}>
            <Ionicons name="star-outline" size={20}  color="black" />

            </Text> 
            <Text style={styles.stars}>
            <Ionicons name="star-outline" size={20}  color="black" />

            </Text> 
            <Text style={styles.stars}>
            <Ionicons name="star-outline" size={20}  color="black" />

            </Text>
             <Text style={styles.stars}>
            <Ionicons name="star-outline" size={20}  color="black" />

            </Text>
          
          </View>
        </View>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={{marginBottom:5}}>verified phone number</Text>
        <Text>9383839289</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
        <Text>Show my phone number</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="rebeccapurple" />
              </View>

      <View>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => props.navigation.navigate('FinishScreen')}
        >
          Post Now
        </Button>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    marginTop: 10,
    marginBottom: 20,
   
    flexDirection:'row',
    // marginLeft:20
  },
  pageContainer: {
   
    paddingLeft:20,
    paddingRight:20,
    // marginLeft:20
  },
  stars:{
    marginRight:2
  }
});

export default PhoneScreen;
