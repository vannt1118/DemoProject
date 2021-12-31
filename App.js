import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import CalculatorScreen from './screens/CalculatorScreen';

export default class App extends React.Component
{
  render()
  {
    return (<CalculatorScreen />);
  }
}