import React,{useEffect, useState} from "react";
import { View, Text, Button,PermissionsAndroid, StyleSheet ,Image, Pressable, SafeAreaView ,TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
// import styles from "./styles";
import data from "./categoryFile";
import { FlatList } from "react-native-gesture-handler";
import Category from "./category";
import * as Sharing from 'expo-sharing';
import CameraRoll from "@react-native-community/cameraroll";
import * as ImagePicker from 'expo-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const AdImageUpload = (props) => {
    const [image, setImage] = useState(null);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [allow, setAllow] = useState(false);

   useEffect(()=>{
     const a = openImagePickerAsync()
     console.log(a)
   },[])

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    } 

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true
    });
    console.log(pickerResult);
    if (!pickerResult.cancelled) {
            setImage(pickerResult.uri);
          }
  };
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(image);
  };

  const renderPhotos = ({item,index})=>{
    <TouchableOpacity style={{width:'32%', height:150, margin:2, backgroundColor:'white'}}>
      <Image source={{uri: item.node.image.uri}} style={{flex:1}}/>
    </TouchableOpacity>
  }
 
  return (
    <View style={styles.container}>
      {/* <FlatList 
      data={photos}
      numColumns={3}
      renderItem={(item)=>renderPhotos(item)}
      keyExtractor={(item,index)=>index}
      /> */}
    <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
    <Text style={styles.instructions}>
      To share a photo from your phone with a friend, just press the button below!
    </Text>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

    <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
      <Text style={styles.buttonText}>Pick a photo</Text>
    </TouchableOpacity>

       {
         image?
        <TouchableOpacity onPress={()=>props.navigation.navigate('AdDescriptionScreen')} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> : null}
        {/* {
         image?
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity> : null} */}
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});


export default AdImageUpload;


// const AdImageUpload = (props) => {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== 'web') {
//         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//           alert('Sorry, we need camera roll permissions to make this work!');
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };
 
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       <Button onPress={()=>props.navigation.navigate('AdDescriptionScreen')} title='Next' />
//     </View>
//   );
// };

// export default AdImageUpload;

