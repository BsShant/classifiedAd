import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  adBox: {
    height:200,
    paddingTop: 5,
    paddingBottom: 5,
    width: '46%',
    paddingLeft:0,
    paddingRight:0
  },
  gridView:{
   
  },
  roomDescriptionContainer: {
    // width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  adProfileContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 5,
    alignItems: "center",
  },
  adProfileImage: {
    borderRadius: 15,
    height: 25,
    width: 25,
    // marginRight: 5
  },
  adDetailContainer: {
    width: "80%",
  },
  adRoomTitle: {
    fontSize: 16,
  },
  adPrice: {
    fontSize: 16,
    fontWeight: "700",
  },
  roomAddress: {
    fontSize: 12,
  },
  roomImageContainer: {
    width: '100%',
    // height:'70%'
  },
  roomImage: {
    width: "100%",
    height: 120,
    // aspectRatio: 1/1
  },
});

export default styles;
