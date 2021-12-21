import React from "react";
import { View, Image, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import AdsImage from "../../components/adsInfo/adsImage";
import TopDescriptionBox from "../../components/adsInfo/topDescriptionBox";
import MiddleDescriptionBox from "../../components/adsInfo/middleDescriptionBox";
import BottomDescriptionBox from "../../components/adsInfo/bottomDescriptionBox";
import ContactUserBox from "../../components/adsInfo/contactUserBox";
import MapBox from "../../components/adsInfo/mapBox";
import { Ionicons } from "react-native-vector-icons";
const AdsInfo = () => {
  return (
    <View>
      {/* <ScrollView stickyHeaderIndices={[0]}> */}
        <AdsImage />
        <TopDescriptionBox />
        <MiddleDescriptionBox />
        <BottomDescriptionBox />
        <MapBox />
      {/* </ScrollView> */}
        <ContactUserBox />
    </View>
  );
};

export default AdsInfo;
