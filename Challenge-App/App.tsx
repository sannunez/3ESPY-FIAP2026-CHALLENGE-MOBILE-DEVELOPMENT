import { StyleSheet, Text, View,  FlatList } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {getCarTruck} from './hooks/getCarTruckData';
import TruckCard from './components/truckCard';

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

  console.log("TIPO DE DATA:", typeof data);
  console.log("ARRAY?", Array.isArray(data));
  console.log("TAMANHO:", carros?.length);

  return (
    <View style={styles.container}>
      <FlatList
      data={carros}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TruckCard
          make={item.make}
          model={item.model}
          trim={item.trim}
          type={item.type}
        />
      )}
    />
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
