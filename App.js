/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Entype from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/Home'

const App: () => Node = () => {

  return (
    <>
    <StatusBar barStyle='dark-content' />
     <SafeAreaView >
        <HomeScreen/>
      
      </SafeAreaView>
    </>
   
  );
};
export default App;
