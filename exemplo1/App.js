import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import snorlax from './assets/img/snorlax.png';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{
          fontSize: 45,
          alignSelf: 'center',
          color: 'green'
        }}>
          Snorlax Berrie
        </Text>

        <Image
          source={snorlax}
          style={{ width: 200, height: 210, alignSelf: "center"}}
        />
      </View>
      <TextInput
        style={{
          height:40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aqui"
      />

    </ScrollView>
  );
}

export default Pokemon;

const styles = StyleSheet.create({
  
});
