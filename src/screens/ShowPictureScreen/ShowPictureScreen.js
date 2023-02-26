import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Avatar } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default function ShowPictureScreen() {
    return (
      <View style={styles.container}>
        <Avatar.Image source={require('./image.jpeg')} size={200} style={styles.image} />
        <Text style={styles.text}>Me and my fave toy - BFFs 4 life!</Text>
      </View>
    );
  }