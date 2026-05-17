import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {getCarTruck} from '../hooks/getCarTruckData';
import TruckCard from './truckCard';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type CarListNav = NativeStackNavigationProp<RootStackParamList, "CarList">;

export default function CarList({navigation,} : {navigation: CarListNav}){
    const { data, isLoading, error } = getCarTruck();

    const carros = data?.data;
    const makes = ["Ford", "Chevrolet", "Marca"]

    // Evita expor erros da API ou estado interno ao usuário — exibe apenas mensagem genérica
    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>Não foi possível carregar os veículos.</Text>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={styles.center}>
                <Text>Carregando...</Text>
            </View>
        )
    }

    return(
        <View>
            <View>
                {makes.map((make) => (
                    <Pressable
                        key={make}
                        // console.log removido — evita vazar dados de interação do usuário nos logs do dispositivo
                        onPress={() => {}}
                        style={styles.checkbox}
                    >
                        <Text>{make}</Text>
                    </Pressable>
                ))}
            </View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        alignItems:"center",
        margin: 10
    },
    checkbox: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: '#888',
        fontSize: 14
    }
})
