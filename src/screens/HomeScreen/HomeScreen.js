import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CustomButton from '../../components/CustomButton';

const HomeScreen = () => {

    return (
        <ImageBackground
            source={require('../../../assets/homebg.png')}
            style={styles.background}
        >
            <View>
                <Text style={styles.text}>Pawsome captions for your furry friends!</Text>
                <CustomButton
                    text='Log in'
                ></CustomButton>
                <CustomButton
                    text='Sign up'
                ></CustomButton>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'white',
        marginTop: '-25%',
        marginLeft: '20%'
    }
});

export default HomeScreen