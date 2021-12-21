import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { Searchbar } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Places from '../../components/adsInfo/googlePlaces'
const SearchScreen = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.goBackButton} onPress={()=>props.navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
    {/* <Places /> */}
      </View>

        </ScrollView>
      

    </SafeAreaView>

  );
};



export default SearchScreen;
