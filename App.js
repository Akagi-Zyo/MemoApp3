import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen'
// 3.x 系では、
// import { createAppContainer, createStackNavigator } from 'react-navigation';
// のようにしていましたが、パッケージが分離されたため、それぞれ個別で読み込む必要があります。
 
const App = createStackNavigator({
  Home: { screen: MemoListScreen },
});
 
export default createAppContainer(App);
