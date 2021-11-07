import 'react-native-gesture-handler';

import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import { registerRootComponent } from 'expo';

import App from './App';

/* 
  if (__DEV__) {
    firestore().useEmulator('192.168.0.100', 8080);
  }

  const db = firestore(); 
*/

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
