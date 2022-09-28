import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Detalhes from './src/components/Detalhes';
import Armas from './src/components/Armas';


const appNavigator = createStackNavigator(
	{
		Home: {
			screen: Armas,
		},
		Detalhes: {
			screen: Detalhes,
		},
	},
	{
		initialRouteName: 'Home',
	},
);

const AppContainer = createAppContainer(appNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}


