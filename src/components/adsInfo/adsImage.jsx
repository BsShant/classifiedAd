import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const AdsImage = ()=>{

    return(
    <View 
    style={styles.adsImageContainer}>
        <Image 
        style={styles.adsImage}
        source={require('../../assets/images/bdwlRoomImage.jpg')}/>
    </View>
    
    )
}

export default AdsImage;