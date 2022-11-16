import { StatusBar } from 'expo-status-bar';
import { FirebaseError } from 'firebase/app';
import { QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    FirebaseError.firestore.collection("teste")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDados([doc.data()]);
        });
      });
  }, []);

  return (
    <View style={styles.container}>
      {
        dados.map((item) => {
          return <Text>{item.nome}</Text>
        })
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
