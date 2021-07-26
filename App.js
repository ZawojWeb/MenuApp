import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  const fetchFonts = () =>{
    Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-blod': require('./assets/fonts/OpenSans-Bold.ttf')
    });
  }
  if(!fontLoaded){
    return (<AppLoading startAsync={fetchFonts} onError={(err) => {console.log(err)}} onFinish={() => setfontLoaded(true)}/>)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
