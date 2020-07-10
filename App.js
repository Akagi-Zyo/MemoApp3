import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from "./src/screens/SignupScreen";
// 3.x 系では、
// import { createAppContainer, createStackNavigator } from 'react-navigation';
// のようにしていましたが、パッケージが分離されたため、それぞれ個別で読み込む必要があります。
const App = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    HOME: { screen: MemoListScreen },
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
