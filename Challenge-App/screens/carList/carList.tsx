import { View, Text, Pressable, StyleSheet, FlatList,Image } from 'react-native';
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
        Chevrolet: {
            filter: "?make=Chevrolet",
            logo: require("../../assets/chevroletLogo.png")
        },
        Ford: {
            filter: "?make=Ford",
            logo: require("../../assets/fordLogo.png")
        },
        GMC: {
            filter: "?make=GMC",
            logo: require("../../assets/gmcLogo.png")
        
        },
        Honda: {
            filter: "?make=Honda",
            logo: require("../../assets/hondaLogo.png")
        },
        Jeep: {
            filter: "?make=Jeep",
            logo: require("../../assets/jeepLogo.png")
        },
        Nissan: {
            filter: "?make=Nissan",
            logo: require("../../assets/nissanLogo.png")
        },
        Ram: {
            filter: "?make=Ram",
            logo: require("../../assets/RAMLogo.png")
        },
        Toyota: {
            filter: "?make=Toyota",
            logo: require("../../assets/toyotaLogo.png")
        }
    }

    // const makes = {

    //     Ford: {
    //         filter: "?make=Ford",
    //         logo: require("../assets/logos/ford.png")
    //     },

    //     Toyota: {
    //         filter: "?make=Toyota",
    //         logo: require("../assets/logos/toyota.png")
    //     }

    // }

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
                        onPress={() => setFilter(value.filter)}
                        style={styles.checkbox} 
                    >
                        <Image
                        source={value.logo}
                        style={{
                            width: 30,
                            height: 30
                        }}
                        />
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
        width: 70,
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