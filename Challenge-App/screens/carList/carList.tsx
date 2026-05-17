import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { getCarTruck } from '../../hooks/getCarTruckData';
import { TabParamList } from '../../types/navigation';
import { useCar } from '../../context/CarProvider';
import { useState } from 'react';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import TruckCard from '../../components/truckCard';

type CarListNav = BottomTabNavigationProp<TabParamList, "Cars">;

type Props = {
    navigation: CarListNav;
};

export default function CarList({ navigation }: Props) {
    const [filter, setFilter] = useState("")
    const { data } = getCarTruck(filter);

    const { setSelectedCarId } = useCar();

    const carros = data?.data;

    
    const [open, setOpen] = useState(false)

    const makes = {
        Chevrolet: "?make=Chevrolet",
        Ford: "?make=Ford",
        GMC: "?make=GMC",
        Honda: "?make=Honda",
        Jeep: "?make=Jeep",
        Nissan: "?make=Nissan",
        Ram: "?make=Ram",
        Toyota: "?make=Toyota"
    }

    return (
        <View style={styles.container}>
            <Text>
                
            </Text>

            <Pressable onPress={() => setOpen(!open)}>
                <Text style={{ 
                        color: "#fff", 
                        marginTop: 20, 
                        fontFamily: 'Montserrat_700Bold', 
                        textDecorationLine: 'underline',
                        marginBottom: 5,
                        fontSize: 16}}>
                    PESQUISAR POR MARCAS
                </Text>
            </Pressable>

            {open && (
                <View style={styles.options}>
                    {Object.entries(makes).map(([label, value]) => (
                    <Pressable
                        key={label}
                        onPress={() => setFilter(value)}
                        style={styles.checkbox} 
                    >
                        <Text style={{color: '#056aee', fontFamily: 'Montserrat_700Bold', fontSize: 12}}>{label}</Text>
                    </Pressable>
                ))}
                </View>
            )}

            <View style={styles.carOptions}>
                <FlatList
                    data={carros}
                    contentContainerStyle={{
                        gap: 20
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TruckCard
                            make={item.make}
                            model={item.model}
                            trim={item.trim}
                            type={item.type}
                            onPress={() => {
                                setSelectedCarId(item.id);

                                navigation.navigate("Details");
                            }}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    
    carOptions: {
        display: 'flex',
        height: 500,
        alignItems: "center",
        marginVertical: 20
        
    },

    checkbox: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        width: 90,
        alignItems: 'center'
        
    },

    options: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        justifyContent: 'center',
        width: 360
    }
});