import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {getCarTruck} from '../hooks/getCarTruckData';
import TruckCard from './truckCard';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type CarListNav = NativeStackNavigationProp<RootStackParamList, "CarList">;

export default function CarList({navigation,} : {navigation: CarListNav}){
    const { data, isLoading, error } = getCarTruck();

    const carros = data?.data;
    const collection = data?.collection;

    return(
        <View style={styles.container}>
            <FlatList
            data={carros}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TruckCard
                make={item.make}
                model={item.model}
                trim={item.trim}
                type={item.type}
                onPress={() => navigation.navigate("Details", { id: item.id })}
                />
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        alignItems:"center",
        margin: 10
    }
})
