import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

const CustomButton = ({ onPress, text }) => {
    return(
        <Button onPress={onPress} mode="contained">
            <Text>{text}</Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
    },
    container_primary: {
        backgroundColor: '#32CD32',
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})

export default CustomButton
