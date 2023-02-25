import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomInput = ({ label, value, setValue, placeholder}) => {
    return (
        <View>
            <TextInput
                mode="outlined"
                label={label} 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
            />
        </View>
    );
};

export default CustomInput