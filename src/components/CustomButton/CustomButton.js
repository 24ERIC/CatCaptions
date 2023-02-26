import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "primary", bgColor, fgColor}) => {
    return(
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}
        >
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}
            >
                {text}
            </Text>
        </Pressable>
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