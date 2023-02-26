import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { CustomInput } from '../../components/CustomInput';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = async = () => {

    }

    return (
        <View>
            <Text>Log in</Text>
            <CustomInput
            label='Username'
            value=''
            setValue={text => setText(text)}
            placeholder='Enter username'
            />
        </View>
    );
};

export default LoginScreen