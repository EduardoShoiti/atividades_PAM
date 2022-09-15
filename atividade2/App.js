import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import arma from './assets/img/arma.png';

const SafeContainer = styled.SafeAreaView`
	flex: 1;	
	justify-content: center;	
`;

const Container = styled.ScrollView`
	background-color: #ff4655;		
`;

const Titulo = styled.Text`
	font-size: 60px;
	font-weight: bold;	
	font-style: italic;
	color: #ffffff;
	text-align: center;
	margin-vertical: 15%;	
`;

const Imagem = styled.Image`
	width: 100%;
	height: 200px;
	align-self: center;
`;

const CaixaDescr = styled.View`
	background-color: #ffffff;
	width: 98%;
	height: 450px;
	borderTopLeftRadius: 50px;
	borderTopRightRadius: 50px;
`;

export default function App() {
	return (
		<SafeContainer>
			<Container>
				<StatusBar animated={true} backgroundColor="#fff" />
				<Titulo>VALORANT</Titulo>
				<Imagem source={arma} />

				<CaixaDescr>
					<Titulo>AA</Titulo>
				</CaixaDescr>
			</Container>
		</SafeContainer>
	);
}
