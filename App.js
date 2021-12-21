import React from "react";
import BasicTab from "./src/tabs/basicTab";
import { SafeAreaView } from "react-native-safe-area-context";
// import MasterStackNavigator from "./src/masterNavigationStack/masterNavigationStack";
import { Button, ThemeProvider, View, Text } from "react-native-elements";

const App = () => {
  return (
    // <ThemeProvider>
    // <SafeAreaView>

      <MasterStackNavigator />
  {/* </SafeAreaView> */}
    // </ThemeProvider>
  );
};
export default App;
