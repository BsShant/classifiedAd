import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import HomeTab from "./homeTab";
import InboxTab from "./inboxTab";
import MyAdsTab from "./myAdsTab";
import PopularTab from "./popularTab";
import PostTab from "./postTab";
const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        borderTopColor: "black",
        borderTopWidth: 1,
        backgroundColor: "grey",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{ flex: 1 }, 
              // index==2?{position:'absolute', top:-40}:null
            ]}
          >
            {index === 0 && <HomeTab isFocused={isFocused} />}
            {index === 1 && <PopularTab isFocused={isFocused} />}
            {index === 2 && <PostTab isFocused={isFocused} />}
            {index === 3 && <InboxTab isFocused={isFocused} />}
            {index === 4 && <MyAdsTab isFocused={isFocused} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  postTabButton: {
    backgroundColor: "white",
    // borderWidth:8,
    // borderColor:'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // position:'absolute',
    bottom: 20,
    zIndex: 200,
  },
});

export default MyTabBar;
