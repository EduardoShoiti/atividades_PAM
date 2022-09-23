import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Detalhes from './src/components/Detalhes';
import Armas from './src/components/Armas';

const SafeContainer = styled.SafeAreaView`
	flex: 1;	
	justify-content: center;	
`;

export default function App() {
	return (
		<SafeContainer>
			<Armas />
		</SafeContainer>
	);
}
