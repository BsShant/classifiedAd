import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    padding: 10,
    // flex:1,
    width: "100%",
    // height:'100%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchBar: { width: "90%" },
  goBackButton: {
    // width:'20%',
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default styles;
