import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
	background-color: #ff4655;		
`;

const NomeArma = styled.Text`
	color: #000000;
	font-size: 26px;
	font-weight: bold;
	margin-vertical: 5%;
	text-align: center;
`;

const Card = styled.View`
    background-color: #00f;		
`;

const DATA = [
    {
        id: 1,
        nome: 'Sheriff',
    },
    {
        id: 2,
        nome: 'Vandal',
    },
    {
        id: 3,
        nome: 'Operator',
    },
];

export default function Armas() {
    return (
        <Container>
            <Card>
                <FlatList
                    data={DATA}
                    renderItem={({ arma }) => <NomeArma> {arma.nome} </NomeArma> }
                />
            </Card>
        </Container>
    );
}