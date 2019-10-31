import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import CreatedTabContainer from './navigators/Navigators';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Monteserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Thin' : require('./assets/fonts/Montserrat-Thin.ttf'),

    // FONT AWESOME ICOMOON FONT
    'fontawesome-light' : require('./assets/fonts/icomoon.ttf')
  });
};

export default App = () => {
  const [appLoaded, setAppLoaded] = React.useState(false);
  let HotelApp; 

  if (!appLoaded) {
    HotelApp = <AppLoading startAsync={fetchFonts} onFinish={() => setAppLoaded(true)} />
  } else {
    HotelApp = <CreatedTabContainer />
  }

  return HotelApp;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
