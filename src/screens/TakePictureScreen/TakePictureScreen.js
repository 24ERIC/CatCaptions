// import React, { useState } from 'react';
// import { Text, View, Image, StyleSheet } from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import CustomButton from '../../components/CustomButton';
// import * as ImagePicker from 'expo-image-picker';

// import { Button } from 'react-native-paper';

// const TakePictureScreen = () => {

//     const [image, setImage] = useState(null);

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4,3],
//             quality: 1,
//         });

//         console.log(result);

//         if(!result.canceled) {
//             setImage(result.assets[0].uri);
//         }
//     }



//     // const openCamera = () => {
//     //     console.log('hello?');
//     //     let options = {
//     //         storageOptions: {
//     //             path: 'images',
//     //             mediaType: 'photo'
//     //         },
//     //         includeBase64: true,
//     //     };

//     //     launchCamera(options, response => {
//     //         console.log('Response: ', response);
//     //         if (response.didCancel) {
//     //             console.log('User cancelled image picker');
//     //         } else if (response.error) {
//     //             console.log('ImagePicker Error: ', response.error);
//     //         } else {
//     //             const source = {uri: 'data:image/jpeg;base64,' + response.base64};
//     //         }
//     //     });
//     // }

//     return (
//         <View>
//             <CustomButton 
//             text="Choose from camera roll" 
//             onPress={pickImage}/>
//             {image && <Image source={{ uri: image}} style={{ width: 200, height: 200}}/>}
//             <Button
//                 mode="contained"
//                 labelStyle={{ fontWeight: 'bold', fontSize: 18 }}
//                 onPress={() => alert('Button pressed!')}
//                 >
//                 Click Me
//             </Button>
//             <Button title="Upload" onPress={handleImageUpload} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     base: {
//         flex: 1,
//         justifyContent: 'flex-end'
//     }
// })

// export default TakePictureScreen



import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

function TakePictureScreen() {
  const [file, setFile] = useState(null);

  const handleFileChange = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
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
      const response = await axios.post(
        'http://128.122.49.69:20437/upload/image?model=GPT',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Choose photo" onPress={handleFileChange} />
      {file && (
        <>
          <Image source={{ uri: file }} style={{ width: 200, height: 200 }} />
          <Button title="Upload" onPress={handleImageUpload} />
        </>
      )}
    </View>
  );
}

export default TakePictureScreen;
