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
import { TextInput, Button } from "react-native-paper";
const subCategories = [
  "One Acre",
  "Two Acre",
  "Three Acre",
  "More Than Three Acre",
];
const AdDescription = (props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescrription] = React.useState("");
  const [location, setLocation] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>

      <View style={styles.formContainer}>
        <TextInput
          label="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label="Description"
          value={description}
          onChangeText={(text) => setDescrription(text)}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>

      <View>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => props.navigation.navigate("PhoneScreen")}
        >
          Next
        </Button>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 10,
    marginBottom: 10,
    // padding:  15
  },
  pageContainer:{
    paddingLeft:20,
    paddingRight:20

  }
});

export default AdDescription;
