import { FlatList, View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Valorant_Armas from '../mocks/weapons';

const SafeContainer = styled.SafeAreaView`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.View`
  background-color: #ff4655;
  border-radius: 15px;
  padding: 30px;
  margin: 8px;
    
`;

const ImgCard = styled.Image`
  width: 250px;
  height: 100px;
  resizeMode: contain;    
  align-self: center`;

const NomeArma = styled.Text`
	color: #000000;
	font-size: 26px;
	font-weight: bold;
	margin-bottom: 5%;
	text-align: center;  
`;

const BtnDetalhes = styled.TouchableOpacity`
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 80%;
  height: 15%;
  font-size: 16px;
  

  text-align: center;
  justify-content: center;
  align-self: center;
`;

const Teste = ({ nome, uri }) => (
	<Card>
		<ImgCard source={{ uri: uri }} />
		<NomeArma>{nome}</NomeArma>
		<BtnDetalhes> Detalhes </BtnDetalhes>
	</Card>
);


export default function Armas() {

	return (
		<SafeAreaView>
			{Valorant_Armas.map((arma) => <Teste nome={arma.Name} uri={arma.Img} />)}
		</SafeAreaView>
	);
}


