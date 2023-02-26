import React, { useState } from 'react';
import { View, Text, Image, Button, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import CustomButton from '../../components/CustomButton';

function TakePictureScreen() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFileChange = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFile(result.uri);
    }
  };

  const handleImageUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: file,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {  
        setLoading(true);
        const response = await axios.post(
            'http://128.122.49.69:20437/upload/image?model=GPT',
            formData,
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            }
        );
        setLoading(false);
        // setCaption(response.data.captions[0]);
        setData(response.data.captions);
    } catch (error) {
      console.error(error);
    }
  };

  const shareImage = (caption) => {
    console.log(`LOL!!!! ${caption}`);
  }

  const Caption = () => {
    // if (caption === '') {
    //     return <Text></Text>;
    // }
        return (
        <View>
            {loading === true && <ActivityIndicator color = {"#000"}/>}
            {/* <Text>{caption}</Text> */}
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <View style={{
                            flexDirection:"row", 
                            alignItems:"center", 
                            justifyContent:"center",
                            marginBottom:10
                            }}>
                            <View style={{width:'70%'}}>
                                <Text style={{fontSize:20}}>{item}</Text>
                            </View>
                            <View style={{width:'20%'}}>
                                <Button
                                    title="Share"
                                    onPress={() => {shareImage(item);}}
                                />
                            </View>
                            
                        </View>
                    )
                }}
            />
        </View>)
  }

  return (
    <View>
      <Button title="Choose photo" onPress={handleFileChange} />
      {file && (
        <>
          <Image source={{ uri: file }} style={{ width: 200, height: 200, alignSelf:'center' }} />
          <Button title="Generate captions" onPress={handleImageUpload} />
        </>
      )}
      <Caption />
    </View>
  );
}

export default TakePictureScreen;
