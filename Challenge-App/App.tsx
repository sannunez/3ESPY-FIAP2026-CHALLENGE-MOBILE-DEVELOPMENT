import { StyleSheet, Text, View,  FlatList } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import CarList from './components/carList'
import Details from './components/detailsScreen'
import RangerRaptorCard from './components/rangerRaptorCard';
import { RootStackParamList } from './navigation/types';



const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "CarList"
            component={CarList}
            options={{title: "Lista"}}/>

          <Stack.Screen
            name="Details"
            component={Details}
            options={{title: "Detalhes"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.container}>
        <RangerRaptorCard/>
        <CarList/>
      </View> */}
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
