import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = async = () => {

    }

    return (
        <View>
            <Text>login!</Text>
        </View>
    );
};

export default LoginScreen