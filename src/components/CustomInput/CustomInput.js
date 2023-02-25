import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder}) => {
    return (
        <View>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
            >
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '7%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'center'
    },
    input: {
        fontSize: 24
    },
});

export default CustomInput