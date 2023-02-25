import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../../components/CustomButton';
import * as ImagePicker from 'expo-image-picker';

const TakePictureScreen = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        console.log(result);

        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    // const openCamera = () => {
    //     console.log('hello?');
    //     let options = {
    //         storageOptions: {
    //             path: 'images',
    //             mediaType: 'photo'
    //         },
    //         includeBase64: true,
    //     };

    //     launchCamera(options, response => {
    //         console.log('Response: ', response);
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else {
    //             const source = {uri: 'data:image/jpeg;base64,' + response.base64};
    //         }
    //     });
    // }

    return (
        <View>
            <CustomButton 
            text="Choose from camera roll" 
            onPress={pickImage}/>
            {image && <Image source={{ uri: image}} style={{ width: 200, height: 200}}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default TakePictureScreen
