import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

// Icons & styles
//
const homeIcon = (<Icon name="home" size={24} />);
const globeIcon = (<Icon name="globe-alt" size={24} />);
const recentIcon = (<Icon name="rocket" size={24} />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Screens
//
class RecentChatsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Recent',
    tabBarIcon: recentIcon,
  };

  render() {
    return(
      <View style={styles.container}>
        <Text>Recent</Text>
      </View>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: homeIcon,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>All</Text>
      </View>
    )
  }
}

class MyWeb extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Web',
    tabBarIcon: globeIcon,
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}

// Navigator App
//
// const APPHome = TabNavigator({
//   Home: { screen: HomeScreen },
//   Recent: { screen: RecentChatsScreen },
//   Web: { screen: MyWeb }
// });


// export default APPHome;

 










// import React, { useState } from 'react';
// import { Text, View, Image } from 'react-native';

// const HomeScreen = () => {


//     return (
//         <View>
//             <Text>register!</Text>
//         </View>
//     );
// };

// export default HomeScreen;
 
 