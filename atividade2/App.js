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
	width: 100%;
	height: 450px;
	borderTopLeftRadius: 50px;
	borderTopRightRadius: 50px;
	
	margin-top: 20%;		
`;

const NomeArma = styled.View`
	color: #000000;
	font-size: 26px;
	font-weight: bold;
	margin-vertical: 5%;
	text-align: center;
`;

const TitDescrArma = styled.Text`
	color: #000000;
	font-size: 11px;
	font-weight: bold;
	padding-horizontal: 5%;
	margin-bottom: 7%;
`;

const DescArma = styled.Text`
	color: #4F4F4F;
	font-size: 11px;
	padding-horizontal: 7%;
	margin-top: 5%;
	margin-left: 5%;
`;
const MarcadorDesc = styled.Text`
	color: #000000;
	font-size: 26px;
	font-weight: bold;
	margin-left: 2%;
	position: relative;
	top: 10%;
`;

export default function App() {
	return (
		<SafeContainer>
			<Container>
				<StatusBar animated={true} backgroundColor="#fff" />
				<Titulo>VALORANT</Titulo>
				<Imagem source={arma} />

				<CaixaDescr>
					<NomeArma>SHERIFF</NomeArma>
					<TitDescrArma>Sheriff é um revólver moderno feito para quem busca tiros certeiros na cabeça do inimigo.</TitDescrArma>
					<MarcadorDesc> - </MarcadorDesc>
					<DescArma> Seus projéteis de alto impacto provocam bastante recuo, então é preciso ter pulso firme. </DescArma>
					<MarcadorDesc> - </MarcadorDesc>
					<DescArma> Quando você domina esta arma, seus inimigos logo percebem que nunca tiveram chance. </DescArma>
				</CaixaDescr>
			</Container>
		</SafeContainer>
	);
}
