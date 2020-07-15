import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from "./src/screens/SignupScreen";
import * as firebase from "firebase";
import ENV from './env.json';

// Required for side-effects
require("firebase/firestore");



const firebaseConfig = firebase.initializeApp({
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
});
if (!firebase.apps.length) {
  firebase.initializeApp({ firebaseConfig });
}

const App = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
  },

  {
    defaultNavigationOptions: {
      headerTitle: "Memot",
      headerTintColor: "#fff",
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: "#265366",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);
export default createAppContainer(App);
