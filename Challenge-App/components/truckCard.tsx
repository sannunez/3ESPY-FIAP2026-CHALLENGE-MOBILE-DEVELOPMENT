import {View, Text, Pressable, StyleSheet} from 'react-native';

interface cardProps {
    make: string,
    model: string,
    trim: string,
    type: string,
    onPress: () => void;
}

export default function TruckCard ({make, model, trim, type, onPress} : cardProps) {
    return(
    <View style={styles.container}>
        <View>
            <View style={styles.carInfos}>
                <Text style={styles.carInfoText}>Marca: {make} </Text>
                <Text style={styles.carInfoText}>Modelo: {model} </Text>
            </View>
            <View style={styles.carInfos}>
                <Text style={styles.carInfoSubText}>Versão: {trim} </Text>
                <Text style={styles.carInfoSubText}>Tipo: {type} </Text>
            </View>
        </View>
        <Pressable onPress={onPress}>
            <Text style={styles.about}>sobre</Text>
        </Pressable>
    </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: 350,
        backgroundColor: "#212022",
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
    carInfos: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    carInfoText: {
        fontSize: 16,
        color: "#fff",
        
    },
    carInfoSubText: {
        fontSize: 12,
        color: "#fff"
    },
    about: {
        color: "#fff",
        flex: 1,
        textAlign: "center",
        textDecorationLine: "underline",
        margin: 5
    }

    })