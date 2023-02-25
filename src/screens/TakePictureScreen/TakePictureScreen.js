import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from './src/components/CustomButton';

const TakePictureScreen = () => {
    const openCamera = () => {

    }

    return (
        <View>
            <CustomButton text="Choose from camera roll" onPress={() => {openCamera}}/>
        </View>
    );
};

export default TakePictureScreen