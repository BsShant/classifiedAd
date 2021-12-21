import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  adsImage: {
    width: "100%",
    height:200,
    // aspectRatio: 16 / 9,  
  },
  adsImageContainer:{
    width:'100%',
},
topDescriptionBox:{
    flexDirection:'row',
    justifyContent:'space-around'
},
middleDescriptionBox:{

},
middleSubBox:{
    flexDirection:'row',
},
bottomDescriptionBox:{

},
mapBox:{
    width:'100%',
    height:500,
    backgroundColor:'grey'
},
contactUserBox:{
  height:70,
  position:'absolute',
  bottom:0,
  width:'100%',
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
userAvatarBox:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'

},
userDetailBox:{

},
contactButton:{

},
userAvatarImage:{
  height:30,
  width:30,
  borderRadius:15
}
});

export default styles;
