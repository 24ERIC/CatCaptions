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

export default CustomButton;