import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { getCarTruck } from '../../hooks/getCarTruckData';
import TruckCard from '../../components/truckCard';

import { TabParamList } from '../../types/navigation';
import { useCar } from '../../context/CarProvider';

type CarListNav = BottomTabNavigationProp<TabParamList, "Cars">;

type Props = {
    navigation: CarListNav;
};

export default function CarList({ navigation }: Props) {
    const { data } = getCarTruck();

    const { setSelectedCarId } = useCar();

    const carros = data?.data;

    const makes = ["Ford", "Chevrolet", "Marca"];

    return (
        <View>
            <View>
                {makes.map((make) => (
                    <Pressable
                        key={make}
                        onPress={() => console.log(`${make} selecionada`)}
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
        height: 350,
        alignItems: "center",
        margin: 10
    },

    checkbox: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5
    }
});