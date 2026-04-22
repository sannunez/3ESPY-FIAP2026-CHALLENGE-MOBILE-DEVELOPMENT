import { StyleSheet, Text, View,  FlatList } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {getCarTruck} from './hooks/getCarTruckData';

const queryClient = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

function Main() {
  const { data, isLoading, error } = getCarTruck();

  console.log("LOADING:", isLoading);
  console.log("ERROR:", error);
  console.log("DATA:", data);

  const carros = data?.data;
  const collection = data?.collection;

  console.log("CARROS:", carros);
  console.log("COLLECTION:", collection);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Erro</Text>;

  return (
    <View style={styles.container}>
      <Text>Check console 👀</Text>
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
