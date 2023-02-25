import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003fed',
    accent: '#0c81f7',

  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <Navigation/>
    </SafeAreaView>
    </PaperProvider>
  );
}

